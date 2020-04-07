//ARRAY COM NÚMEROS//
var numeros = [10, 6, 3, 20, 15, 42, 0];

window.onload = function () {
  var maior = numeros[0];

  for (var p = 1; p < numeros.length; p++) {
    if (numeros[p] > maior) {
      maior = numeros[p];
    }
  }
  document.getElementById("saida").innerHTML = "O maior valor é" + maior;
};
