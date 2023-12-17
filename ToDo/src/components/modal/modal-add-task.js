import { createButton } from '../button/button'
import '../modal/modal-add-task.scss'

export const createModalAddTask = (date) => {

    const elem = document.createElement ('div')
    elem.className = 'modal-add-task'
    elem.innerHTML = `<div class='head'> Добавить задачу</div>`

    let title 
    let url 
    let description 
    let start 
    let finish 

    if (date) {
        title = date.title 
        url = date.url
        description = date.description
        start = date.date_start
        finish = date.date_finish
    } else {
        title = ''
        url = ''
        description = ''
        start = ''
        finish = ''
    }


    const container = document.createElement ('div')
    container.className = 'container'
    container.innerHTML = `   
        <div class='task'>
            <span>Заголовок</span>
            <div class='input'><input id='task' value='${title}' placeholder='Введите название'></div>
            <div class='input'><input id='url' value='${url}' placeholder='Введите URL'></div>
        </div>
        <div class='description'>
            <span>Описание</span>
            <div class='input'><textarea id='description' value='' placeholder='Введите описание'>${description}</textarea></div>
        </div>
        <div class='date'>
            <div>
                <span>Начать с</span>
                <div class='input start'><input id='date-start' value='${start}' placeholder='Дата начала'></div>
            </div>
            <div>
                <span>Закончить до</span>
                <div class='input finish'><input id='date-finish' value='${finish}' placeholder='Дата завершения'></div>
            </div>
        </div>
    `
    const buttonContainer = document.createElement ('div')
    buttonContainer.className = 'button-container'

    const cancelButton = createButton (null, 'Назад', 'basic modal', 'cancel')
    let addButton

    Store.tasks.forEach((elem, i) => {
        if (!(elem.id === date.id)) {
            addButton = createButton (null, 'Добавить', 'primory modal', 'record') 
        } else {
            Store.tasks.splice(i, 1)
            addButton = createButton (null, 'Сохранить', 'primory modal', 'record')
        }
    });
     

    buttonContainer.append(cancelButton, addButton)

    elem.append(container, buttonContainer)

    return elem
}