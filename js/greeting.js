const loginInput=document.querySelector("#login-form input");
const loginForm=document.querySelector("#login-form");
const greeting=document.querySelector('#greeting');

const HIDDEN_CLASSNAME="hidden"
const USERNAME='username'

function greetingF(username){
    greeting.innerText=`hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    const newUsername=loginInput.value;
    localStorage.setItem(USERNAME, newUsername);//localStorage에 username 저장
    greetingF(newUsername);
}

const savedUsername=localStorage.getItem(USERNAME)
if(savedUsername===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    greetingF(savedUsername);
}