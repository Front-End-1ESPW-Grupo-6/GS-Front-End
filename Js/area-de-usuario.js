//Variaveis
//Verificação se o usuario esta logado
window.addEventListener("load", () => {
  console.log("Evento de carregamento acionado");
  const loginNav = document.querySelector('#login')
  const desconect = document.querySelector('#desconect')
  let valorAtuacao = document.querySelectorAll('input[type=radio][name="valorAtuacao"]')
  let valorContrib = document.querySelectorAll('input[type=radio][name="value-radio"]')
  let userLog = JSON.parse(localStorage.getItem("userLog"));


  //relogio e data
  console.log(userLog)
  const getHours = () => {
    const clock = document.getElementsByClassName('clock')[0]
    const dateV = document.getElementsByClassName('date')[0]
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const hour = hours < 10 ? `0${hours}` : hours
    const minute = minutes < 10 ? `0${minutes}` : minutes
    const second = seconds < 10 ? `0${seconds}` : seconds
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    clock.innerHTML = `${hour}:${minute}:${second}`
    dateV.innerHTML = `${day}/${month}/${year}`
  }
  setInterval(() => {
    getHours()
  }, 1000)


  //Dark Mode
  const toggle = document.querySelector('#toggle_checkbox');
  const body = document.querySelector('body');

  toggle.addEventListener('click', () => {
    body.classList.toggle('dark');
  });


  //Sistema de verificação do usuario logado
  if (userLog === 1) {
    loginNav.href = 'javascript:void(0);'
    console.log("Usuario esta logado");
    let userLogado = JSON.parse(localStorage.getItem('logedUser'));
    let nameContrib = document.querySelector('#nameContrib')
    let nameHeader = document.querySelector('#nameHeader')
    let contribuicaoBtn = document.querySelector('#contribuicao-button-confirmation')
    console.log(userLogado);
    console.log(userLogado[0].name);
    nameHeader.innerHTML = userLogado[0].name
    nameContrib.innerHTML = userLogado[0].name
    loginNav.innerHTML = userLogado[0].name
    loginNav.addEventListener('click', () => {
      console.log('Abre login bar')
      const innerLoginBar = document.querySelector('#loginBar')
      innerLoginBar.classList.toggle('abreNav')
    });
    desconect.addEventListener('click', () => {
      localStorage.setItem("userLog", JSON.stringify("0"))
      location.reload();
      console.log('Usuario deslogado');
    })


    // seção do infográfico (mapa)
    valorAtuacao.forEach(radio => {
      radio.addEventListener('change', () => {
        let mapaEstado = document.querySelector('#mapaEstado')
        let graficoEstado = document.querySelector('#graficoEstado')
        let lugar = document.querySelector('#lugar')
        let aPopulacao = document.querySelector('#aPopulacao')
        let aPorcentagem = document.querySelector('#aPorcentagem')
        let aPorDia = document.querySelector('#aPorDia')
        let aPerMes = document.querySelector('#aPerMes')
        let aPerAno = document.querySelector('#aPerAno')


        // estados em estudo (informações demográficas e comida necessária)
        if (radio.value === 'alagoas') {
          console.log('Selecionado Alagoas');
          mapaEstado.src = './Imgs/alagoas.png'
          graficoEstado.src = './Imgs/grafico_alagoas.png'
          lugar.innerHTML = 'Alagoas </br> Estado do norte com maior carencia alimentar'
          aPopulacao.innerHTML = '1.235.000'
          aPorcentagem.innerHTML = '36,7%'
          aPorDia.innerHTML = '3.705 ton'
          aPerMes.innerHTML = '111.150 ton'
          aPerAno.innerHTML = '1.333.800 ton'
        } else if (radio.value === 'amapa') {
          console.log('Selecionado Amapa');
          mapaEstado.src = './Imgs/amapa.png'
          graficoEstado.src = './Imgs/grafico_amapa.png'
          lugar.innerHTML = 'Amapa </br> Estado do nordeste com maior carencia alimentar'
          aPopulacao.innerHTML = '281.000'
          aPorcentagem.innerHTML = '32%'
          aPorDia.innerHTML = '843 ton'
          aPerMes.innerHTML = '25.290 ton'
          aPerAno.innerHTML = '303.480 ton'
        }
      });
    });


    // seleção para contribuição de alimentos pela ONG (kg a serem doados)
    valorContrib.forEach(radio => {
      radio.addEventListener('change', (evt) => {
        let quantiaContrib = document.querySelector('#quantiaContrib')
        if (radio.value === 'value-1') {
          quantiaContrib.innerHTML = '10 ton/dia'
        } else if (radio.value === 'value-2') {
          quantiaContrib.innerHTML = '10 ton/mes'
        } else if (radio.value === 'value-3') {
          quantiaContrib.innerHTML = '10 ton/ano'
        }
      });
    });
    contribuicaoBtn.addEventListener('click', (evt) => {
      evt.preventDefault()
      let quantiaContribValue = document.querySelector('#quantiaContrib').innerHTML;
      let agradecimento = document.querySelector('#agradecimento')
      console.log(quantiaContribValue);
      agradecimento.classList.remove('hide')
    });
  } else {
    window.location.href = "./login.html"
  }
})
