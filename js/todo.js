const toDoForm = document.getElementById("todo__form");
const toDoInput = document.querySelector("#todo__form input");
const toDoList = document.querySelector(".todo__list");

const TODOS = "toDos"
const CSS_IHIDDEN = "ihidden";

let toDos = []; // 수정 가능

function toDoEdit(event) {
    event.preventDefault();
    const toDoEditForm = event.target
    const toDoEditInput = event.target.children[0];
    const toDoEditTarget = event.target.parentElement;
    const toDoEditTargetId = event.target.parentElement.id;

    for (const item of toDos){
        if (item['id'] === Number(toDoEditTargetId)) {
            item['text'] = toDoEditInput.value;
            toDoEditTarget.children[0].innerText = toDoEditInput.value
        }
    }
    localStorage.setItem(TODOS, JSON.stringify(toDos));
    toDoEditForm.remove();

    const toDoGetEditSpan = toDoEditTarget.children[0];
    toDoGetEditSpan.classList.add(FADE_IN_BOX);
    toDoGetEditSpan.classList.remove(CSS_HIDDEN);

    const toDoGetEditBtns = toDoEditTarget.children[1];
    for (let i = 0; i < 2; i++) {
        const toDoGetEditTargetChild = toDoGetEditBtns.children[i];
        if (toDoGetEditTargetChild) {
            toDoGetEditTargetChild.classList.add(FADE_IN_BOX);
            toDoGetEditTargetChild.classList.remove(CSS_IHIDDEN);
        }
    }
}

function toDoGetEdit(event) {
    const toDoGetEditBtn = event.target;
    const toDoGetRemoveBtn = event.target.nextElementSibling;
    const toDoGetEditTarget = event.target.closest(".btn");
    const toDoGetEditSpan = toDoGetEditTarget.children[0];
    toDoGetEditBtn.classList.add(CSS_IHIDDEN);
    toDoGetRemoveBtn.classList.add(CSS_IHIDDEN);
    toDoGetEditSpan.classList.add(CSS_HIDDEN);
    
    const toDoGetEditForm = document.createElement("form");
    toDoGetEditForm.className = "toDoGetEditForm";
    const toDoGetEditInput = document.createElement("input");
    toDoGetEditInput.className = "toDoGetEditInput";
    toDoGetEditInput.value = toDoGetEditSpan.innerText;
    const toDoGetEditSumit = document.createElement("input");
    toDoGetEditSumit.className = "toDoGetEditSumit";
    toDoGetEditSumit.type = "submit"
    toDoGetEditSumit.value = "수정"

    toDoGetEditForm.appendChild(toDoGetEditInput);
    toDoGetEditForm.appendChild(toDoGetEditSumit);
    toDoGetEditTarget.appendChild(toDoGetEditForm);

    toDoGetEditForm.addEventListener("submit", toDoEdit);
    
    
    //const toDoEditTargetChild = event.target.parentElement.children;
    //const toDoEditTargetSpan = event.target.parentElement.children[0];
    //
}

function toDoSave() {
    localStorage.setItem(TODOS, JSON.stringify(toDos));
}

function toDoRemove(event) {
    toDoTarget = event.target.closest(".btn");
    toDoTarget.remove();
    toDos = toDos.filter(i => i.id !== parseInt(toDoTarget.id));
    toDoSave();
}

function toDoCreate(newTodo) {
    const toDoLi = document.createElement("div");
    toDoLi.id = newTodo.id;
    toDoLi.className = "btn";
    toDoLi.classList.add(FADE_IN_BOX);
    const toDoSpan = document.createElement("div");
    toDoSpan.innerText = newTodo.text;
    toDoSpan.classList.add("toDoSpan");
    const toDoLiBtn = document.createElement("div");
    toDoLiBtn.className = "toDoLiBtn";
    const toDoEditBtn = document.createElement("i");
    toDoEditBtn.classList.add("toDoEdit");
    toDoEditBtn.classList.add("fa-regular");
    toDoEditBtn.classList.add("fa-pen-to-square");
    const toDoRemoveBtn = document.createElement("i");
    toDoRemoveBtn.classList.add("toDoRemove");
    toDoRemoveBtn.classList.add("fa-regular");
    toDoRemoveBtn.classList.add("fa-trash-can");

    toDoLi.appendChild(toDoSpan);
    toDoLiBtn.appendChild(toDoEditBtn);
    toDoLiBtn.appendChild(toDoRemoveBtn);
    toDoLi.appendChild(toDoLiBtn);
    toDoList.appendChild(toDoLi);

    toDoEditBtn.addEventListener("click", toDoGetEdit);
    toDoRemoveBtn.addEventListener("click", toDoRemove);
}

function toDoValue(event) {
    event.preventDefault();
    const newTodo = {
        id: Date.now(),
        text: toDoInput.value,
    };
    toDos.push(newTodo);
    toDoInput.value = "";
    toDoCreate(newTodo);
    toDoSave();
}

toDoForm.addEventListener("submit", toDoValue);

const toDosLocal = localStorage.getItem(TODOS);

if (toDosLocal) {
    const toDosArray = JSON.parse(toDosLocal);
    toDos = toDosArray
    // toDosArray.forEach((item) => console.log("hi", item));
    toDosArray.forEach(toDoCreate);
}