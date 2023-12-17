import './tasklist.scss'
import {createTask} from '../task/task'

export const createTasklist = () => {

    const elem = document.createElement('div')
    elem.className = 'tasklist'

    for (let item of Store.tasks) {
        elem.append(
            createTask(item)
        )
    }

    let task
    let y = 0

    if (Store.tasks.length === 0) elem.innerHTML = 'Задач нет'

    const taskListContainet = elem
    taskListContainet.addEventListener ('mousedown', (e) => {

        task = e.target.classList.contains('.dragg') ? e.target.parentElement.parentElement : null

        if (task === null) return

        task.style.cssText = 'position: '
        task.style.transform = 'translateY(0px)  '
        let top = 0


    })
taskListContainet.addEventListener('mousemove', (e) => {

            console.log(e.offsetY)
            y = e.offsetY
            top = e.offsetY
            task.style.top = top + 'px'
        })
    return elem 
}

export const updateTasklist = () => {

    document.querySelector('.task-container').innerHTML = ''
    document.querySelector('.task-container')
    .append(createTasklist())
}