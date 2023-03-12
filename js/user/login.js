const login = document.querySelector(".login");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetingStar = document.querySelector(".greetingStar");
const greeting = document.querySelector(".greeting");
const resetBtn = document.querySelector(".reset");

const USER_NAME_KEY = "userName";
const CSS_HIDDEN = "hidden";
const FADE_IN_BOX = "fade-in-box";

function showGreeting(name) {
    greetingStar.classList.remove(CSS_HIDDEN);
    greeting.classList.remove(CSS_HIDDEN);
    greetingStar.classList.add(FADE_IN_BOX);
    greeting.classList.add(FADE_IN_BOX);
    // `${변수}`
    greetingStar.innerText = "✨ 📣🐰 ✨";
    greeting.innerText = `Hello, ${name}`;
}
function saveNickname(event) {
    event.preventDefault();
    const userName = loginInput.value;
    
    localStorage.setItem(USER_NAME_KEY,userName);
    login.classList.add(CSS_HIDDEN);
    showGreeting(userName);
};
function resetNickname(event){ 
    window.scrollTo({ top: document.body.scrollHeight/3, behavior: "smooth" });
    greetingStar.classList.add(CSS_HIDDEN);
    greeting.classList.add(CSS_HIDDEN);
    login.classList.remove(CSS_HIDDEN);
    localStorage.removeItem("userName");
    checkUsername();
}
function checkUsername() {
    const savedUsername = localStorage.getItem(USER_NAME_KEY);
    if (savedUsername === null) {
        login.classList.remove(CSS_HIDDEN);
        // form의 submit의 기본 동작은 브라우저를 새로고침한다.
        loginForm.addEventListener("submit", saveNickname);
    } else {
        login.classList.add(CSS_HIDDEN);
        showGreeting(savedUsername);
    };
}

checkUsername();
resetBtn.addEventListener("click", resetNickname);