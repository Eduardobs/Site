function validarUsuarioSenhaX(formulario) {
    if (formulario.email == "") {
        formulario.email.focus();
        alert("E-mail não informado!");
        return false;
    }

    if (formulario.senha=="") {
        formulario.senha.focus();
        alert("Senha não informada!");
        return false;
    }
    return true;
}