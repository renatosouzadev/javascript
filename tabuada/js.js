function VerTabuada(){
    var multiplicado = Number(document.getElementById('num').value)
    for(var i = 1; i <= 10; i++){
        document.getElementById(i).innerHTML = `${multiplicado} x ${i} = ${multiplicado*i}`
    }}