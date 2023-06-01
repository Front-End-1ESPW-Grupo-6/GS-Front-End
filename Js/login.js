//Variaveis

//Darkmode

//Login Toggle
//Cadastro Toggle

//sistema de Login

//Sistema de Cadastro
//Cadastro

//Variaveis de cadastro usuario

//User signup system
signupButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    //Signup var
    let nameInput = document.querySelector('#name-Signup-Input').value;
    let nicknameInput = document.querySelector('#nick-Signup-Input').value;
    let emailInput = document.querySelector('#email-Signup-Input').value;
    let numberInput = document.querySelector('#number-Signup-Input').value;
    let passwordInput = document.querySelector('#pass-Signup-Input').value;
    let passConfirmInput = document.querySelector('#passConfirm-Signup-Input').value;
    //Signup Confirm
    if (nameInput == "" || nicknameInput == "" || emailInput == "" || passwordInput == "" || passConfirmInput == "") {
        console.log('Todos os campos devem ser preenchidos');
        signupMsgAlert.innerHTML = 'Todos os campos devem ser preenchidos';
        signupMsgAlert.classList.add('');
        return;
    }
    //email
    if (emailInput.length < 5) {
        console.log('Email deve conter mais de 5 letras');
        signupMsgAlert.innerHTML = 'Email deve conter mais de 5 caracteres';
        signupMsgAlert.classList.add('');
        return;
    } else if (emailInput.indexOf('@') === -1) {
        console.log('Email invalido, deve conter "@"');
        signupMsgAlert.innerHTML = 'Email invalido, deve conter "@"';
        signupMsgAlert.classList.add('');
        return;
    }
    //Number
    if (numberInput = 0){
        console.log('0')
    }
    //Password
    if (passwordInput.length < 5) {
        console.log('Senha deve conter no minimo 5 digitos');
        signupMsgAlert.innerHTML = 'Senha deve conter no minimo 5 digitos'
        signupMsgAlert.classList.add('');
        return;
    }
    //Password Confirm
    if (passConfirmInput != passwordInput) {
        console.log('Senhas digitadas não coincidem');
        signupMsgAlert.innerHTML = 'Senhas digitadas não coincidem';
        signupMsgAlert.classList.add('');
        return;
    }

    const newUser = {
        name: nameInput,
        nick: nicknameInput,
        accountType: "user",
        emailUser: emailInput,
        senhaUser: senhaInput
    }
    console.log(newUser)
    //Store new user
    let UsersListBack = JSON.parse(localStorage.getItem("usersList"));
    UsersListBack.push(newUser);
    localStorage.setItem("usersList", JSON.stringify(UsersListBack));
    //Site feedback
    console.log('Cadastro efetuado com sucesso!');
    signupMsgAlert.innerHTML = 'Cadastro efetuado com sucesso!';
    signupMsgAlert.classList.add('');
    //Text box clear
    let nameInputClear = document.querySelector('#name-Signup-Input');
    let nicknameInputClear = document.querySelector('#nick-Signup-Input');
    let emailInputClear = document.querySelector('#email-Signup-Input');
    let passwordInputClear = document.querySelector('#pass-Signup-Input');
    let passConfirmInputClear = document.querySelector('#passConfirm-Signup-Input');
    nameInputClear.value = ""
    nicknameInputClear.value = ""
    emailInputClear.value = ""
    passwordInputClear.value = ""
    passConfirmInputClear.value = ""
})
//Evento de olho
let eyeLogin = document.querySelector('#openLEye')
eyeLogin.addEventListener('click', () => {
    const loginPass = document.querySelector("#senha");
    if (loginPass.getAttribute('type') == 'password') {
        loginPass.setAttribute("type", "text");
        eyeLogin.setAttribute("class", "fa-regular fa-eye");
    } else {
        loginPass.setAttribute("type", "password");
        eyeLogin.setAttribute("class", "fa-regular fa-eye-slash");

    }
})

let eyeCadastro = document.querySelector('#openCEye')
eyeCadastro.addEventListener('click', () => {
    const cadastroPass = document.querySelector("#senhaC");
    if (cadastroPass.getAttribute('type') == 'password') {
        cadastroPass.setAttribute("type", "text");
        eyeCadastro.setAttribute("class", "fa-regular fa-eye");
    } else {
        cadastroPass.setAttribute("type", "password");
        eyeCadastro.setAttribute("class", "fa-regular fa-eye-slash");

    }
})

let eyeCadastro2 = document.querySelector('#openCEye2')
eyeCadastro2.addEventListener('click', () => {
    const cadastroPass2 = document.querySelector("#senhaCC");
    if (cadastroPass2.getAttribute('type') == 'password') {
        cadastroPass2.setAttribute("type", "text");
        eyeCadastro2.setAttribute("class", "fa-regular fa-eye");
    } else {
        cadastroPass2.setAttribute("type", "password");
        eyeCadastro2.setAttribute("class", "fa-regular fa-eye-slash");

    }
})