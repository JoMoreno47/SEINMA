function check_key(e) {
    
    tecla = (document.all) ? e.keyCode : e.which;

    patron = /[A-Z a-z]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

function validForm(){
    var m1 = document.fRegistro.email.value;
    var m2 = document.fRegistro.confirmEmail.value;
    var p1 = document.fRegistro.pass.value;
    var p2 = document.fRegistro.confirmPass.value;
    if (m1 == m2 && p1 == p2) {
        document.getElementById("mailError").style.display = "none";
        document.getElementById("passError").style.display = "none";
        document.getElementById("confirm").disabled = true;
    } else if(p1 != p2){
        document.getElementById("passError").style.display = "inline";
        document.getElementById("confirm").disabled = false;
    }
    else if(p1 != p2){
        document.getElementById("mailError").style.display = "inline";
        document.getElementById("confirm").disabled = false;
    }
}
