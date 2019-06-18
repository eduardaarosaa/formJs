
function verifica(){
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");

    //Validando se os campos estão vazios
    if((nome.value.length) == 0){
        window.alert("Preencha o campo nome");
    }
    if((email.value.length) == 0){
        window.alert("Preencha o campo e-mail");
    }
    if((senha.value.length) == 0){
        window.alert("Preencha o campo senha");
    }else if((senha.value.length) <6 ){
        window.alert("O campo senha precisa ter no mínimo 6 caracteres");
    }
}