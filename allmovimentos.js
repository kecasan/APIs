fetch(`https://pokeapi.co/api/v2/pokemon/mewtwo`)
    .then(response => response.json())
    .then(data => {
        data.moves.forEach(move => {
            console.log('Movimento:', move.move.name);
        });
    });