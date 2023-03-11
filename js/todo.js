const toDoForm = document.getElementById("to-do-form");
const toDoInput = document.querySelector("#to-do-form input");
const toDoList = document.querySelector(".to-do-list");

const TODOS = "toDos"

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

    for (let i = 0; i < 3; i++) {
        const toDoGetEditTargetChild = toDoEditTarget.children[i];
        if (toDoGetEditTargetChild) {
            toDoGetEditTargetChild.classList.add(FADE_IN_BOX);
            toDoGetEditTargetChild.classList.remove(CSS_HIDDEN);
        }
    }
}

function toDoGetEdit(event) {
    const toDoGetEditTarget = event.target.parentElement.parentElement;
    const toDoGetEditSpan = event.target.parentElement.parentElement.children[0];
    for (let i = 0; i < 3; i++) {
        const toDoGetEditTargetChild = event.target.parentElement.parentElement.children[i];
        if (toDoGetEditTargetChild) {
            toDoGetEditTargetChild.classList.add(CSS_HIDDEN);
        }
    }
    
    const toDoGetEditForm = document.createElement("form");
    toDoGetEditForm.className = "toDoGetEditForm";
    const toDoGetEditInput = document.createElement("input");
    toDoGetEditInput.className = "toDoGetEditInput";
    toDoGetEditInput.value=toDoGetEditSpan.innerText;
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
    // console.log(event); event -> target
    // console.dir(event.target); event.target -> parentElement
    toDoTarget = event.target.parentElement.parentElement;
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
    const toDoEditBtn = document.createElement("botton");
    toDoEditBtn.innerText = "✎";
    toDoEditBtn.classList.add("toDoEdit");
    const toDoRemoveBtn = document.createElement("botton");
    toDoRemoveBtn.innerText = "𝗫";
    toDoRemoveBtn.classList.add("toDoRemove");

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