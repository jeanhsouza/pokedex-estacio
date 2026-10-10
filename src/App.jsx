import { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard";

function App() {
	const [pokemons, setPokemons] = useState([]);
	const [loading, setLoading] = useState(true);
	const [search, setSearch] = useState("");
	const [error, setError] = useState("");

	useEffect(() => {
		async function fetchPokemons() {
			try {
				setLoading(true);
				setError("");

				const response = await fetch(
					"https://pokeapi.co/api/v2/pokemon?limit=151",
				);

				if (!response.ok) {
					throw new Error("Não foi possível buscar os Pokémon.");
				}

				const data = await response.json();

				const details = await Promise.all(
					data.results.map(async (pokemon) => {
						const response = await fetch(pokemon.url);

						if (!response.ok) {
							throw new Error("Erro ao carregar os detalhes.");
						}

						return response.json();
					}),
				);

				setPokemons(details);
			} catch (err) {
				setError(err.message || "Ocorreu um erro inesperado.");
			} finally {
				setLoading(false);
			}
		}

		fetchPokemons();
	}, []);

	const filteredPokemons = pokemons.filter((pokemon) =>
		pokemon.name.toLowerCase().includes(search.toLowerCase()),
	);

	return (
		<main className="container">
			<header className="header">
				<h1>Pokédex</h1>
				<p>Explore o mundo Pokémon!</p>
			</header>

			<input
				type="text"
				className="search-input"
				placeholder="Buscar Pokémon pelo nome..."
				value={search}
				onChange={(event) => setSearch(event.target.value)}
				aria-label="Buscar Pokémon pelo nome"
			/>

			{loading && <p className="message">Carregando Pokémon...</p>}

			{error && <p className="error">{error}</p>}

			{!loading && !error && filteredPokemons.length === 0 && (
				<p className="message">Nenhum Pokémon encontrado.</p>
			)}

			{!loading && !error && (
				<section className="pokemon-grid">
					{filteredPokemons.map((pokemon) => (
						<PokemonCard key={pokemon.id} pokemon={pokemon} />
					))}
				</section>
			)}
		</main>
	);
}

export default App;
