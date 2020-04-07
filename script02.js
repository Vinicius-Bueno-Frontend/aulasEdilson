//EXEMPLO DE ARRAY//
var dados = "João, Marcelo, Fábio";

var dados1 = ["João", "Marcelo", "Fábio"];

window.onload = function () {
  for (var p = 0; p < 3; p++) {
    document.getElementById("saida").innerHTML += dados1[p] + "<br>";
  }
};
