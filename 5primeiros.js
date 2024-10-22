fetch(`https://pokeapi.co/api/v2/pokemon/mewtwo`)
    .then(response => response.json())
    .then(data => {
        data.results.forEach(pokemon => {
            console.log('Nome', pokemon.name);
        })
    });