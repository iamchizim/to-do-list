
const form = document.querySelector('form')
form.addEventListener("submit", addFunction)

const divEle = document.querySelector("#output")

function addFunction(e){
    e.preventDefault()
    const task = document.getElementById("task").value
    divEle.innerHTML += `
    <p>${task} <button class="deleteBtn"> Delete</button></p>
   
    `
}

divEle.addEventListener('click', deleteTask)

function deleteTask(e){
    if(!e.target.classList.contains('deleteBtn')){
        return
    }
    const btn = e.target;
    console.log(btn)
    btn.parentNode.remove()
}