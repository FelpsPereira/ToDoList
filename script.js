const tasks = document.querySelector('#tasks'), addTask = document.querySelector('#addTask').addEventListener('click', ()=>{
    const newTasks = document.createElement('p')
    newTasks.textContent = 'Ola MUndo kkkkk'
    tasks.appendChild(newTasks)
    tasks.scrollTop = tasks.scrollHeight
})