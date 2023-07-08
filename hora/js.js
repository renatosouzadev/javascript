function relogio() {
    setInterval(() => {
      //obtem data e hora do sistema
      const agora = new Date();

      //listas de dias e meses
      const diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
      const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  
      //define e formata partes da data e hora
      const diaSemana = diasSemana[agora.getDay()];
      const mes = meses[agora.getMonth()];
      const hora = agora.getHours();
      const min = agora.getMinutes().toString().padStart(2, '0');
      const seg = agora.getSeconds().toString().padStart(2, '0');

      //declara s variaveis usadas a sequir
      let bdtn;
      let imagem;
      let corDeFundo;
  
      //define partes da resposta
      if (hora < 5) {
        bdtn = 'deveria estar dormindo';
        imagem = 'madruga.png';
        corDeFundo = '#3A3159';
      } else if (hora < 12) {
        bdtn = 'bom dia';
        imagem = 'manha.png';
        corDeFundo = '#F2E3D0';
      } else if (hora < 18) {
        bdtn = 'boa tarde';
        imagem = 'tarde.png';
        corDeFundo = '#8ab2e3';
      } else if (hora < 24) {
        bdtn = 'boa noite';
        imagem = 'noite.png';
        corDeFundo = '#3C5E73';
      } else {
        bdtn = '[ERRO]';
        imagem = 'erro.png';
        corDeFundo = '#14221b';
      }
  
      //manipula p DOM
      document.getElementById('data').innerHTML = `Hoje é ${diaSemana}, ${agora.getDate()} de ${mes} de ${agora.getFullYear()}`;
      document.getElementById('hora').innerHTML = `e são exatamente ${hora}:${min}:${seg}, ${bdtn}`;
      document.getElementById('img').src = imagem;
      document.body.style.background = corDeFundo;

    }, 100);
  }
  