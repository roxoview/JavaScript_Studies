const limit = 10;
let offset = 0;
const maxRecords = 151




const loadMoreButton = document.getElementById("loadMore");


const pokemonList = document.getElementById("pokemonList");

//por padrão o fetch usa o method GET
//promise -> async

//encadeamento de then
//o que vai pro segundo then é o retorno do primeiro e o que vai pro primeiro é o retorno da promise

function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map(
      (pokemon) => `
            <li class="pokemon ${pokemon.type}">
              <span class="number">#${pokemon.number}</span>
              <span class="name">${pokemon.name}</span>
    
              <div class="detail">
                <ol class="types">
                  ${pokemon.types
                    .map((type) => `<li class="type ${type}">${type}</li>`)
                    .join("")}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
              </div>
            </li>
      `
    ).join('');

    pokemonList.innerHTML += newHtml;
  });
}
loadPokemonItens(offset, limit)

loadMoreButton.addEventListener("click", () => {
  offset += limit
  const qtdRecordNextPage = offset + limit

  if(qtdRecordNextPage >= maxRecords){
    const newLimit = maxRecords - offset
    loadPokemonItens(offset, newLimit);
    loadMoreButton.parentElement.removeChild(loadMoreButton)
    
  }else{
    loadPokemonItens(offset, limit);
  }
});
