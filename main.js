
//funcion para cambiar la foto del logo

var image = document.getElementById('image');

image.addEventListener('mouseover', cambiarImagen);
image.addEventListener('mouseout', restaurarImagen);

function cambiarImagen() {
  image.src = 'img/logo2.png';
}

function restaurarImagen() {
  image.src = 'img/logo.png';
}


// Función para mostrar la hora y el día de la semana

 function mostrarHora() {
   var fecha = new Date();
   var hora = fecha.getHours();
   var minutos = fecha.getMinutes();
   var segundos = fecha.getSeconds();

   
   hora = (hora < 10) ? "0" + hora : hora;
   minutos = (minutos < 10) ? "0" + minutos : minutos;
   segundos = (segundos < 10) ? "0" + segundos : segundos;

   var horaActual = hora + ":" + minutos + ":" + segundos;

   
   document.getElementById("hora").innerHTML = horaActual;
 }

 
 setInterval(mostrarHora, 1000);

 function mostrarHoraConDia() {
    var idioma = document.getElementById("selector").value || "castellano"; // Valor por defecto en castellano si no se selecciona un idioma
  
    var fecha = new Date();
    var diaSemana = fecha.getDay();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
  
    var diaSemanaTexto;
    switch (diaSemana) {
      case 0:
        if (idioma === "castellano") {
          diaSemanaTexto = "Domingo";
        } else if (idioma === "euskera") {
          diaSemanaTexto = "Igandea";
        } else {
          diaSemanaTexto = "Sunday";
        }
        break;
      case 1:
        if (idioma === "castellano") {
          diaSemanaTexto = "Lunes";
        } else if (idioma === "euskera") {
          diaSemanaTexto = "Astelehena";
        } else {
          diaSemanaTexto = "Monday";
        }
        break;
      case 2:
        if (idioma === "castellano") {
          diaSemanaTexto = "Martes";
        } else if (idioma === "euskera") {
          diaSemanaTexto = "Asteartea";
        } else {
          diaSemanaTexto = "Tuesday";
        }
        break;
      case 3:
        if (idioma === "castellano") {
          diaSemanaTexto = "Miércoles";
        } else if (idioma === "euskera") {
          diaSemanaTexto = "Asteazkena";
        } else {
          diaSemanaTexto = "Wednesday";
        }
        break;
      case 4:
        if (idioma === "castellano") {
          diaSemanaTexto = "Jueves";
        } else if (idioma === "euskera") {
          diaSemanaTexto = "Osteguna";
        } else {
          diaSemanaTexto = "Thursday";
        }
        break;
      case 5:
        if (idioma === "castellano") {
          diaSemanaTexto = "Viernes";
        } else if (idioma === "euskera") {
          diaSemanaTexto = "Ostirala";
        } else {
          diaSemanaTexto = "Friday";
        }
        break;
      case 6:
        if (idioma === "castellano") {
          diaSemanaTexto = "Sábado";
        } else if (idioma === "euskera") {
          diaSemanaTexto = "Larunbata";
        } else {
          diaSemanaTexto = "Saturday";
        }
        break;
    }
  
    var horaTexto = hora + ":" + minutos + ":" + segundos;
  
    document.getElementById("demo").innerHTML = diaSemanaTexto;
    document.getElementById("hora").innerHTML = horaTexto;
  }
  
  
  mostrarHoraConDia();
  
  
  document.getElementById("selector").addEventListener("change", mostrarHoraConDia);
  
   setInterval(mostrarHora, 1000);
  
  
  
  // funionalidad de leer mas o menos texto
  let hide_text_btn = document.querySelectorAll('.btn');
  let hide_text = document.querySelectorAll('.hide');
  
  hide_text_btn.forEach(function(btn, index) {
    btn.addEventListener('click', function() {
      toggleText(index);
    });
  });
  
  function toggleText(index) {
    hide_text[index].classList.toggle('show');
  
    if (hide_text[index].classList.contains('show')) {
      hide_text_btn[index].innerHTML = 'Leer menos';
    } else {
      hide_text_btn[index].innerHTML = 'Leer más';
    }
  }
  
  
