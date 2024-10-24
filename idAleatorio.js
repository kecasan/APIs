let id = Math.floor(Math.random() * 100) + 1;
fetch('https://pokeapi.co/api/v2/pokemon/' + id)
    .then(response => response.json())
    .then(data => {
        console.log('Pokémon:', data.name);
    });