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


const editableDiv = document.querySelector('#assunt')
const maxCharacters = 87  // Defina o número máximo de caracteres permitidos

editableDiv.addEventListener('input', () => {
    const text = editableDiv.textContent
    if (text.length > maxCharacters) {
        // Trunca o conteúdo ao limite
        editableDiv.textContent = text.slice(0,maxCharacters)
        
        // Opcional: reposiciona o cursor no final
        const range = document.createRange()
        const sel = window.getSelection()
        range.selectNodeContents(editableDiv)
        range.collapse(false)
        sel.removeAllRanges()
        sel.addRange(range)
    }
})

/*
const newTasks = document.createElement('p')
newTasks.textContent = 'Oloco'
tasks.appendChild(newTasks)
tasks.scrollTop = tasks.scrollHeight
*/