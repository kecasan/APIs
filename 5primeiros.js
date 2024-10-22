fetch(`https://pokeapi.co/api/v2/pokemon?limit=5`)
    .then(response => response.json())
    .then(data => {
        data.results.forEach(pokemon => {
            console.log('Nome', pokemon.name);
        })
    });