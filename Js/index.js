//Variaveis
const loginNav = document.querySelector('#login')
// const loginBar = document.querySelector('.loginBar')
//Verificação se o usuario esta logado
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
      loginBar.classList.toggle('open');
    });
    // loginBar.addEventListener('click', () => {
    //   localStorage.setItem("userLog", JSON.stringify("0"))
    //   location.reload();
    //   console.log('Usuario deslogado');
    // })
  }
})
