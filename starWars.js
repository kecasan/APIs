function buscaPersonagem() {
    var personagem = document.getElementById("personagem").value;
    var url = "https://swapi.dev/api/people/?search=${personagem}";

    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            var descricao = '';
            for (var i = 0; i < data.name ; i++) {
                descricao += '<li>' + data.name[i].name + '</li>';
            }
        })
}