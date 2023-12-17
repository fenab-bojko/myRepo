import '../task/task.scss'
import { createButton } from '../button/button'
import { updateTaskList } from '../tasklisk/tasklist'
import { createFade } from '../fade/fade';

const removeTask = (id) => {

    window.Store.tasks.forEach((elem, i) => {
        
        if (elem.id === id) {
            window.Store.tasks.splice (i, 1)
        }
    });

    updateTaskList ()
}

const redactTask = (date, dataset_name) => {

    createFade (dataset_name, date)

}


export const createTask = (date) => {

    const elem = document.createElement ('div')
    elem.className = 'tasks'

    elem.innerHTML = `
    <div class='cell task' data-index='${date.id}'>
        <div class='check'><img class='hidden' src="./public/check.svg"></div>
        <div>
            <div class='title'>${date.title}</div>
            <div class='url'>${date.url}</div>
        </div>
    </div>
    <div class='cell status'>
        <div>${date.status}</div>
    </div>
    <div class='cell description'>
        ${date.description}
    </div>
    <div class='cell start'>
        ${date.date_start}
    </div>
    <div class='cell finish'>
        ${date.date_finish}
    </div>
    `
    
    const editButton = document.createElement('div')
    editButton.className = 'cell edit'

    editButton.append((createButton ('<img data-name="delete-task" src="./public/trash.svg">', null, 'edit', 'delete-task')),(createButton ('<img data-name="edit-task" src="./public/edit.svg">', null, 'edit', 'edit-task')))
    
    elem.append(editButton)

    editButton.addEventListener('click', (e) => {
        
        switch (e.target.dataset.name) {

            case 'delete-task': removeTask (date.id)
                break

            case 'edit-task': redactTask (date, e.target.dataset.name)
                break
        }

    })

    return elem
}