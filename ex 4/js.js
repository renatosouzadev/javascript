function clicar(){
    var inicio = document.getElementById("inicio").value
    var fim = document.getElementById("fim").value
    var passo = document.getElementById("passo").value
    
    if (inicio === "" || fim === "") {
        alert("[ERRO] O campo não pode estar vazio.")
    } else {
        var nums = []
        var num = inicio
        for(num = inicio; num + passo < fim; num += passo){
            nums.push(num)
        }
        document.getElementById('res') = nums
    }
}