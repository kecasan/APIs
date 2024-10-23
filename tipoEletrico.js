fetch('https://pokeapi.co/api/v2/pokemon/mewtwo')
    .then(response => response.json())
    .then(data => {
        const isEletric = data.types.some(type => type.type.name === 'electric');
        console.log('É do tipo elétrico:', isEletric);
    });