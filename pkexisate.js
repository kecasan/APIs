fetch(`https://pokeapi.co/api/v2/pokemon/mewto`)
    .then(response => {
        if (response.ok) {
            return response.json(); // Adicione "return" aqui
        } else {
            throw new Error('Esse pokemon não existe'); // Lance um erro se a resposta não for ok
        }
    })
    .then(data => {
        console.log('Existe', data.name);
    })
    .catch(error => {
        console.log(error.message); // Trate o erro aqui
    });
