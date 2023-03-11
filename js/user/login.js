const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetingStar = document.querySelector(".greetingStar");
const greeting = document.querySelector(".greeting");
const resetBtn = document.querySelector(".reset");

const USER_NAME_KEY = "userName";
const CSS_HIDDEN = "hidden";
const FADE_IN_BOX = "fade-in-box";

function func(event) {
    event.preventDefault();
    const userName = loginInput.value;
    
    localStorage.setItem(USER_NAME_KEY,userName);
    loginForm.classList.add(CSS_HIDDEN);
    showGreeting(userName);
};

function showGreeting(name) {
    greetingStar.classList.remove(CSS_HIDDEN);
    greeting.classList.remove(CSS_HIDDEN);
    greetingStar.classList.add(FADE_IN_BOX);
    greeting.classList.add(FADE_IN_BOX);
    // `${변수}`
    greetingStar.innerText = "✨ 📣🐰 ✨";
    greeting.innerText = `Hello, ${name}`;
}

function resetNickname(event){ 
    greetingStar.classList.add(CSS_HIDDEN);
    greeting.classList.add(CSS_HIDDEN);
    loginForm.classList.remove(CSS_HIDDEN);
    localStorage.removeItem("userName");
    checkUsername();
}

// localStorage에 userName 여부 확인

function checkUsername() {
    const savedUsername = localStorage.getItem(USER_NAME_KEY);
    if (savedUsername === null) {
        loginForm.classList.remove(CSS_HIDDEN);
        // form의 submit의 기본 동작은 브라우저를 새로고침한다.
        loginForm.addEventListener("submit", func);
    } else {
        showGreeting(savedUsername);
    };
}

checkUsername();
resetBtn.addEventListener("click", resetNickname);