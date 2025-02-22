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
        const div = document.createElement('div'),divButtons = document.createElement('div'),pTitle = document.createElement('p'),pAssunt = document.createElement('p'),divContent = document.createElement('div'),removeButton = document.createElement('button'),completedButton = document.createElement('button'), arrowButton = document.createElement('button'), AssuntBelow = document.createElement('p'), divAll = document.createElement('div'), divPAssunt = document.createElement('div'), completed = document.createElement('div')

        div.classList.add('newTask')
        divContent.classList.add('divContent')
        divButtons.classList.add('divButtons')
        divAll.classList.add('divAll')
        divPAssunt.classList.add('divPAssunt')
        pTitle.classList.add('newTitleP')
        AssuntBelow.classList.add('assuntBelow')
        pAssunt.classList.add('newAssuntP')
        removeButton.classList.add('removeButton')
        completedButton.classList.add('completedButton')
        arrowButton.classList.add('arrowButton')
        completed.classList.add('completed')
        
        
        pTitle.textContent = title
        AssuntBelow.innerHTML = 'Assunt below'
        pAssunt.innerHTML = assunt
        arrowButton.innerHTML = '<i class="fa-solid fa-arrow-down"></i>'

        if(title == ''){
            pTitle.textContent = 'Title'
        }
        if (assunt == ''){
            pAssunt.textContent = 'Nothing'
        }

        removeButton.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        completedButton.innerHTML = '<i class="fa-solid fa-check"></i>'

        
        div.appendChild(divAll)
        div.appendChild(divPAssunt)
        divAll.appendChild(divContent)
        divContent.appendChild(pTitle)
        divContent.appendChild(AssuntBelow)
        divContent.appendChild(arrowButton)
        divAll.appendChild(divButtons)
        divAll.appendChild(completed)
        divButtons.appendChild(removeButton)
        divButtons.appendChild(completedButton)
        tasks.appendChild(div)
        divPAssunt.appendChild(pAssunt)

        completedButton.addEventListener('click', ()=>{
            completed.classList.toggle('expanded')
            
        })
        
        removeButton.addEventListener('click', () =>{
            div.remove();
        })

        arrowButton.addEventListener('click', () => {
            div.classList.toggle('expanded');
            if (divPAssunt.style.display == 'block'){
                divPAssunt.style.display = 'none'
                arrowButton.innerHTML = '<i class="fa-solid fa-arrow-down"></i>'
            }else {
                divPAssunt.style.display = 'block'
                arrowButton.innerHTML = '<i class="fa-solid fa-arrow-up" style="color: gray;"></i>'
            }
        });

        a.textContent = ''
        t.value = ''
    }
    newTask(t.value,a.textContent)
})
  


const editableDiv = document.querySelector('#assunt')
const maxCharacters = 80

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
