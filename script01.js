var btn = document.getElementById("executar");
var sd = document.getElementById("saida");

btn.onclick = function () {
  var nome = prompt("Digite o seu nome");
  for (var i = 0; i < nome.length; i++) {
    sd.innerHTML += nome[i] + "<br>";
  }
};
