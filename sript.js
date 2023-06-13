let docTitle = document.title;
window.addEventListener("blur", () => {
 document.title = "Regresa :("; 
})

window.addEventListener("focus", () => {
  document.title = docTitle;
})


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

function limpiarTexto(element) {
  if (element.value === 'Correo electrónico') {
    element.value = '';
  }
}

function restaurarTexto(element) {
  if (element.value === '') {
    element.value = 'Correo electrónico';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var container = document.querySelector('.evo');
  var textElement = document.querySelector('.evoT');
  var cloneElement = textElement.cloneNode(true);
  var containerWidth = container.offsetWidth;
  var textWidth = textElement.offsetWidth;
  var isPlaying = false;

  container.appendChild(cloneElement);

  function startAnimation() {
    if (isPlaying) {
      return;
    }

    isPlaying = true;

    function animate() {
      if (!isElementInViewport(container)) {
        isPlaying = false;
        return;
      }

      var position = containerWidth;

      function moveText() {
        position--;

        if (position < -textWidth) {
          position = containerWidth;
        }

        textElement.style.transform = 'translateX(' + position + 'px)';
        cloneElement.style.transform = 'translateX(' + (position + textWidth) + 'px)';

        if (isPlaying) {
          requestAnimationFrame(moveText);
        }
      }

      moveText();
    }

    animate();
  }

  function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  window.addEventListener('scroll', function() {
    if (isElementInViewport(container)) {
      startAnimation();
    }
  });
});

// document.addEventListener('DOMContentLoaded', function() {
//   var container = document.querySelector('.evo');
//   var textElement = document.querySelector('.evoT');
//   var position = container.offsetWidth; // Iniciar desde el borde derecho
//   var speed = 3; // Velocidad del movimiento en píxeles por fotograma

//   function moverTexto() {
//     position -= speed;
//     textElement.style.left = position + 'px';

//     // Reiniciar posición cuando el texto ha salido completamente del contenedor
//     if (position < -textElement.offsetWidth) {
//       position = container.offsetWidth;
//     }

//     requestAnimationFrame(moverTexto);
//   }

//   moverTexto();
// });




