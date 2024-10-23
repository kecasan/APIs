function traduzir() {
    var texto = document.getElementById("texto").value;
    var idioma = document.getElementById("idioma").value;
    var url = "https://api.funtranslations.com/translate/" + idioma + ".json" + "?text=" + idioma;

    fetch(url)
}