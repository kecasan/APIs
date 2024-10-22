fetch(`https://pokeapi.co/api/v2/pokemon/mewtwo`)
    .then(response => response.json())
    .then(data => {
        console.log('Altura:', data.height);
    });