function buscarPokemon() {
    var nome = document.getElementById('pokemon-name').value.toLowerCase();
    var url = 'https://pokeapi.co/api/v2/pokemon/' + nome;
    
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            
            var habilidades = '';
            for (var i = 0; i < data.abilities.length; i++) {
                habilidades += '<li>' + data.abilities[i].ability.name + '</li>';
            }

            
            document.getElementById('resultado').innerHTML = 
                '<p><strong>Nome:</strong> ' + data.name + '</p>' +
                '<p><strong>Altura:</strong> ' + data.height + '</p>' +
                '<p><strong>Peso:</strong> ' + data.weight + '</p>' +
                '<p><strong>Habilidades:</strong></p>' +
                '<ul>' + habilidades + '</ul>' +
                '<img src="' + data.sprites.front_default + '" alt="' + data.name + '">';
        });
}


function listarPrimeirosPokemons() {
    var url = 'https://pokeapi.co/api/v2/pokemon?limit=5';
    
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            
            var nomesPokemons = '';
            for (var i = 0; i < data.results.length; i++) {
                nomesPokemons += data.results[i].name + ' ';
            }

            
            document.getElementById('resultado').innerHTML = 
                '<p><strong>Primeiros 5 Pokémon:</strong> ' + nomesPokemons + '</p>';
        });
}



function gerarPokemonAleatorio() {
    var id = Math.floor(Math.random() * 100) + 1;
    var url = 'https://pokeapi.co/api/v2/pokemon/' + id;

    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            
            document.getElementById('resultado').innerHTML = 
                '<p><strong>Pokémon aleatório:</strong> ' + data.name + '</p>' +
                '<p><strong>Altura:</strong> ' + data.height + '</p>' +
                '<p><strong>Peso:</strong> ' + data.weight + '</p>' +
                '<img src="' + data.sprites.front_default + '" alt="' + data.name + '">';
        });
}