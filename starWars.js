function buscaPersonagem() {
    var personagem = document.getElementById("personagem").value;
    var url = `https://swapi.dev/api/people/?search=${personagem}`;
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            document.getElementById('resultado').innerHTML = 
                `<p><strong>Nome:</strong>` + data.results.name + `</p>`;
            
            console.log(data);

        });
}