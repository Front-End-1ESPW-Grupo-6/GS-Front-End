//Variaveis
const loginNav = document.querySelector('#login')
const desconect = document.querySelector('#desconect')


//Darkmode
const toggle = document.querySelector('#toggle_checkbox');
const body = document.querySelector('body');

toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
});


//Relogio
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


//Verificação se o usuário esta logado
window.addEventListener("load", () => {
  console.log("Evento de carregamento acionado");
  let userLog = JSON.parse(localStorage.getItem("userLog"));
  let coverLogin = document.querySelector("#coverLogin")
  console.log(userLog)
  if (userLog === 1) {
    loginNav.href = 'javascript:void(0);'
    console.log("Usuario esta logado");
    let userLogado = JSON.parse(localStorage.getItem('logedUser'));
    console.log(userLogado);
    console.log(userLogado[0].name);
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
  }
})

