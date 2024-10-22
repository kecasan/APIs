fetch(`https://pokeapi.co/api/v2/pokemon/mewtwo`)
    .then(response => response.json())
    .then(data => {
        data.types.forEach(type => {
            console.log('Tipo', type.type.name);
        })
    });