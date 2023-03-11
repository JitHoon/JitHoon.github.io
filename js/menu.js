const homeBtn = document.querySelector(".homeBtn");
const helloBtn = document.querySelector(".helloBtn");
const toDoListBtn = document.querySelector(".toDoListBtn");

function goHome() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function goHello() {
    window.scrollTo({ top: document.body.scrollHeight/3, behavior: "smooth" });
}

function goToDoList() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}

homeBtn.addEventListener("click", goHome);
helloBtn.addEventListener("click", goHello);
toDoListBtn.addEventListener("click", goToDoList);