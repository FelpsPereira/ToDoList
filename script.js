const tasks = document.querySelector('#tasks'),
addDisplay = document.querySelector('#add-display'),
Blur = document.querySelector('#blur'),
addTask = document.querySelector('#addTaskButton').addEventListener('click', ()=>{
    if (addDisplay.style.display === 'none' && Blur.style.display === 'none'){
        addDisplay.style.display = 'flex'
        Blur.style.display = 'block'
    }else{
        addDisplay.style.display = 'none'
        Blur.style.display = 'none'
    }
    
})


const cancelButton =document.querySelector('#cancel')
const addButton = document.querySelector('#add')

cancelButton.addEventListener('click', ()=>{
    addDisplay.style.display = 'none'
    Blur.style.display = 'none'
})

const t = document.querySelector('#title'),
a = document.querySelector('#assunt');
const newP = (title, assunt) =>{
    let divNewTask = document.querySelector('#newTask')
    const pNewTitle = document.createElement('p');
    pNewTitle.id = 'newTitleP';
    pNewTitle.textContent = title
    divNewTask.appendChild(pNewTitle);
    
}

addButton.addEventListener('click', () => {
    
    
    const divNewTask = document.createElement('div');
    divNewTask.id = 'newTask';
    tasks.appendChild(divNewTask);
    newP(t.textContent, a.textContent)
    t.textContent = ''
    a.textContent = ''
    addDisplay.style.display = 'none';
    Blur.style.display = 'none';
})
/*addDisplay.style.display = 'none'
    Blur.style.display = 'none'
    const newTasks = document.createElement('p')
    newTasks.textContent = 'Oloco'
    tasks.appendChild(newTasks)
    tasks.scrollTop = tasks.scrollHeight*/

const editableDiv = document.querySelector('#assunt')
const maxCharacters = 87  // Defina o número máximo de caracteres permitidos

editableDiv.addEventListener('input', () => {
    const text = editableDiv.textContent
    if (text.length > maxCharacters) {
        editableDiv.textContent = text.slice(0,maxCharacters)
        
        const range = document.createRange()
        const sel = window.getSelection()
        range.selectNodeContents(editableDiv)
        range.collapse(false)
        sel.removeAllRanges()
        sel.addRange(range)
    }
    
})
