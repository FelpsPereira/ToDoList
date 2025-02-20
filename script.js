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
    a.textContent = ''
    t.value = ''
})

const t = document.querySelector('#title'),
a = document.querySelector('#assunt')

addButton.addEventListener('click', ()=>{
    const newTask = (title,assunt) =>{
        addDisplay.style.display = 'none'
        Blur.style.display = 'none'
        const div = document.createElement('div'),divButtons = document.createElement('div'),pTitle = document.createElement('p'),pAssunt = document.createElement('p'),divContent = document.createElement('div'),removeButton = document.createElement('button'),completedButton = document.createElement('button')

        div.classList.add('newTask')
        divContent.classList.add('divContent')
        pTitle.classList.add('newTitleP')
        pAssunt.classList.add('newAssuntP')
        removeButton.classList.add('removeButton')
        completedButton.classList.add('completedButton')
        
        
        pTitle.textContent = title
        pAssunt.textContent = assunt

        if(title == ''){
            pTitle.textContent = 'Title'
        }
        if (assunt == ''){
            pAssunt.textContent = 'Nothing'
        }
        
        removeButton.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        completedButton.innerHTML = '<i class="fa-solid fa-pen"></i>'

        div.appendChild(divContent)
        divContent.appendChild(pTitle)
        divContent.appendChild(pAssunt)
        div.appendChild(divButtons)
        divButtons.appendChild(removeButton)
        divButtons.appendChild(completedButton)
        tasks.appendChild(div)

         

        a.textContent = ''
        t.value = ''
    }
    newTask(t.value,a.textContent)
})


const editableDiv = document.querySelector('#assunt')
const maxCharacters = 65

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
