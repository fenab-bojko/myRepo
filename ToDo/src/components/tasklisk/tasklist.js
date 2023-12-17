import '../tasklisk/tasklist.scss'
import { createTask } from '../task/task'

export const createTaskList = () => {

    const elem = document.createElement('div')
    elem.className = 'tasklist'

   

    for (let item of Store.tasks) {

       elem.append(createTask(item))

    }

    if (window.Store.tasks.length === 0) elem.innerHTML = 'Задач нет'

    return elem
}

export const updateTaskList = () => {
    
    document.querySelector('.tasks-container').innerHTML = ''
    document.querySelector('.tasks-container').append(createTaskList ())

}