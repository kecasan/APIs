fetch('https://pokeapi.co/api/v2/type')
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < 3; i++) {
            console.log('Tipo:', data.results[i].name);
        }
    });