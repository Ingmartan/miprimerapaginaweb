document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})

function validarFormulario() {
                        var nombre = document.getElementById("nombre").value;
                        var edad = document.getElementById("edad").value;
                        var correo = document.getElementById("correo").value;
            
                        if (nombre === "") {
                            alert("Por favor, ingresa tu nombre.");
                            return false;
                        }
            
                        if (edad === "") {
                            alert("Por favor, ingresa tu edad.");
                            return false;
                        }
            
                        if (isNaN(edad) || edad <= 10) {
                            alert("La edad debe ser un número mayor a 1.");
                            return false;
                        }
            
                        if (correo === "") {
                            alert("Por favor, ingresa tu correo electrónico.");
                            return false;
                        }
            
                        // Validación básica del formato de correo electrónico utilizando una expresión regular
                        var correoRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                        if (!correoRegex.test(correo)) {
                            alert("Por favor, ingresa un correo electrónico válido.");
                            return false;
                        }
            
                        // Si todas las validaciones pasan, se puede enviar el formulario
                        return true;
                    }