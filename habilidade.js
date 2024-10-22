fetch(`https://pokeapi.co/api/v2/pokemon/mewtwo`)
    .then(response => response.json())
    .then(data => {
        data.abilities.forEach(ability => {
            console.log('Habilidade:', ability.ability.name);
        });
    });