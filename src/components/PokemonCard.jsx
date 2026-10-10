function PokemonCard({ pokemon }) {
	const image =
		pokemon.sprites.other["official-artwork"].front_default ||
		pokemon.sprites.front_default;

	return (
		<article className="pokemon-card">
			<span className="pokemon-number">
				#{String(pokemon.id).padStart(3, "0")}
			</span>

			<img src={image} alt={pokemon.name} className="pokemon-image" />

			<h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>

			<div className="pokemon-types">
				{pokemon.types.map((item) => (
					<span key={item.type.name} className={`type type-${item.type.name}`}>
						{item.type.name}
					</span>
				))}
			</div>
		</article>
	);
}

export default PokemonCard;
