
// Habilitar el botón al aceptar

const boton = document.getElementById("btn");
const acepto = document.getElementById("acepto");

acepto.addEventListener("change", habilitar);

function habilitar() {

    boton.disabled = !acepto.checked;

    if (acepto.checked) {
        boton.classList.add("enabled");
    } else {
        boton.classList.remove("enabled");
    }
}

 //Validar el email y password
 var loginForm = document.querySelector('.login-form');
 loginForm.addEventListener('submit', function(event) {
  event.stopPropagation(); // Evita el envío del formulario para realizar la validación en JavaScript
  event.preventDefault();

   var email = document.getElementById('email').value;
   var password = document.getElementById('password').value;

   var credentials = [
     { email: 'hola@hola.com', password: 'hola' },
     { email: 'ale@ale.com', password: 'ale' },
     { email: 'may@may.com', password: 'may' }
    
   ];

   var isValid = credentials.some(function(credential) {
     return credential.email === email && credential.password === password;
    
   });

   if (isValid) {
   
    window.location.href = 'index.html'; // Redirige a la página principal si el correo y la contraseña coinciden
   } else {
     alert('Correo o contraseña incorrectos'); // Muestra una alerta si el correo o la contraseña no coinciden
   }
 });
