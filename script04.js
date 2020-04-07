// ARRAY COM SOMA DE VALORES //
var valores = [50, 32, 6, 10, 25, 8, 65];

window.onload = function () {
  var resultado = 0;

  for (var t = 0; t < valores.length; t++) {
    resultado += valores[t];
  }

  alert("A soma dos valores: "+valores+ " é "+resultado+
  "\ne a média é "+(resultado/valores.length));
};
