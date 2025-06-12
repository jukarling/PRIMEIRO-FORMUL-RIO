function soma(){

    let numero_um = parseInt(document.getElementById("primeiro_numero").value);
    let numero_dois = parseInt(document.getElementById("segundo_numero").value);

    let soma_numero = numero_um + numero_dois;

    document.getElementById("Resultado").textContent = "Resultado:" + soma_numero;
}


function subtrai(){
    let numero_um = parseInt(document.getElementById("primeiro_numero").value);
    let numero_dois = parseInt(document.getElementById("segundo_numero").value);
    
    let subtrair_numero = numero_um - numero_dois;

    document.getElementById("Resultado").textContent = "Resultado:" + subtrair_numero; 
}