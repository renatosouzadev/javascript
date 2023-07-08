function relogio() {
    setInterval(() => {
        //obtem a hora do sistema
        let agora =  new Date()
        let hor   =  agora.getHours()
        let min   =  agora.getMinutes()
        let seg   =  agora.getSeconds()

        min = 10

        //formata a hora
        function format(){
            //trata os dados de hora e minutos e segundos para terem apenas duas casas decimais
            if(hor < 10){
                str_hor = `0${hor}`
            }
            if(min < 10){
                str_min = `0${min}`
            }
            if(seg < 10){
                str_seg = `0${seg}`
            }

            //formata a hora
            let hora = `${str_hor}:${str_min}:${str_seg}`

            //mostra a hora tratada no console
            console.log(hora)
        }

        //define a resposta de acordo com a hora
        function res(){
            let res

            if       (hor < 4){
                res = 'É madrugada, deveria estar dormindo!'

            }else if(hor < 12){
                res = 'Bom dia!'

            }else if(hor < 18){
                res = 'Boa tarde!'

            }else{
                res = 'Boa noite!'
            }
        }

        format()
    }, 100);
}