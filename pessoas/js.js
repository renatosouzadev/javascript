function verificar(){
    var data = new Date()
    var ano  = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res  = document.getElementById('res')

    if (fano.value.length == 0|| Number(fano.value) > ano){
        window.alert('[ERRO]  Verifique o ano de nascimento e tente novamnete!')
    } else {
        var fsex  = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
    }

    if (fsex[0].checked) {
        genero = 'homem'
    } else if (fsex[1].checked){
        genero = 'mulher'
    }

    if (genero == 'homem'){
        if (idade <= 13){
            imagem = 'menino.png'
        }else if(idade <= 50){
            imagem = 'adulto.png'
        }else{
            imagem = 'velho.png'
        }

    } else if (genero == 'mulher'){
        if (idade <= 13){
            imagem = 'menina.png'
        }else if(idade <= 50){
            imagem = 'adulta.png'
        }else{
            imagem = 'velha.png'
        }
    }

    res.innerHTML = `<img src="${imagem}" alt=""></img>
    <p>${genero} com ${idade} anos</p>`
}