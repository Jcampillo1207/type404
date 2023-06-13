var textos = ["Contact Us", "Contactez-nous", "Contáctanos", "Contate-nos", "联系我们"];
var indice = 0;
var verificado = false;
var intervalo;

function cambiarTexto() {
  var anchoPantalla = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var elemento = document.getElementById("texto-cambiante");

  if (!verificado) {
    if (anchoPantalla <= 768) {
      verificado = true;
      intervalo = setInterval(function() {
        elemento.textContent = textos[indice];
        indice = (indice + 1) % textos.length;
      }, 2000);
    } else {
      elemento.textContent = textos[0];
    }
  }
}

cambiarTexto();

window.addEventListener("resize", function() {
  cambiarTexto();
});

function limpiarTexto(element) {
  element.value = '';
}




