function buscaPersonagem() {
    var personagem = document.getElementById("personagem").value;
    var url = `https://swapi.dev/api/people/?search=${personagem}`;
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            if (data.results.length > 0) {
                var personagemEncontrado = data.results[0];
                document.getElementById('resultado').innerHTML = 
                    `<p><strong>Nome:</strong> ${personagemEncontrado.name}</p>
                     <p><strong>Altura:</strong> ${personagemEncontrado.height}</p>
                     <p><strong>Peso:</strong> ${personagemEncontrado.mass}</p>`;
            } else {
                document.getElementById('resultado').innerHTML = 
                    `<p>Nenhum personagem encontrado.</p>`;
            }
            console.log(data);
        });
}
