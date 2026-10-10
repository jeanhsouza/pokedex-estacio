# Pokédex em React

Projeto desenvolvido como atividade prática para aprender
a criar aplicações React que consomem APIs públicas.

## Funcionalidades

- Listagem dos primeiros 151 Pokémon.
- Exibição do nome, número, imagem e tipos.
- Busca de Pokémon pelo nome.
- Indicador de carregamento.
- Tratamento de erros na requisição.
- Layout responsivo para dispositivos móveis.

## Tecnologias utilizadas

- React
- JavaScript
- Vite
- CSS
- Fetch API
- PokeAPI

## Conceitos praticados

- Componentização.
- Props.
- useState.
- useEffect.
- Requisições HTTP com fetch.
- Renderização de listas com map().
- Filtragem de dados com filter().
- Tratamento de estados de carregamento e erro.

## API utilizada

https://pokeapi.co/

Endpoint para listar os Pokémon:

https://pokeapi.co/api/v2/pokemon?limit=20

## Como executar o projeto

1. Instale o Node.js.
2. Clone este repositório.
3. Entre na pasta do projeto.
4. Instale as dependências.
5. Inicie o servidor de desenvolvimento.

```bash
git clone URL_DO_SEU_REPOSITORIO
cd pokedex
npm install
npm run dev
```

## Publicação no GitHub Pages

O workflow `.github/workflows/deploy.yml` publica automaticamente a pasta `dist`
no GitHub Pages a cada push para `main`. Em **Settings > Pages**, selecione
**GitHub Actions** como origem da publicação.

O site do projeto fica disponível em:
https://jeanhsouza.github.io/pokedex-estacio/

## Autor

Jean Souza

# pokedex-estacio
# pokedex-estacio
