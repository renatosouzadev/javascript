function calcular(){
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso")

    if(isNaN(altura) || altura < 1){
        alert("verifique os dados e tente novamente");
    };
    return;
}