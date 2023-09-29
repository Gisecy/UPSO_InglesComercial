function validarCorreo(correo) {
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;  /*expresion regular para validacion de email en JS - w3resourse.com*/
    var esValido = regexEmail.test(correo);
    if (esValido == true) {
        alert("Enviado.")
    }
    else {
        alert("El correo electronico es inválido.")
    }
}