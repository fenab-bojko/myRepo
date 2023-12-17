import { createButton } from '../button/button'
import { updateTasklist } from '../tasklist/tasklist'
import './addtaskform.scss'
import { saveDataLS } from '../../controllers/localStorage'
import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'
import { removeModal } from '../modal/modal'

const validateForm = (dataObject, formElement) => {

// ______________________________________________
    
    let isValidTitle = true
    let isValidDate = true
    let regexDate = /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/


    if (dataObject.title === '') {
        isValidTitle = false
        formElement.querySelector('.title').classList.toggle('error', !isValidTitle)
    } else {
        formElement.querySelector('.title').classList.toggle('error', !isValidTitle)  
    }
    if (dataObject.date_finish === '' || !regexDate.test(dataObject.date_finish)) {
        isValidDate = false
        formElement.querySelector('.date-finish').classList.toggle('error', !isValidDate)
    } else {
        formElement.querySelector('.date-finish').classList.toggle('error', !isValidDate)
    }
   
    return isValidDate && isValidTitle
}
// _____________________________________________ 

export const createAddTaskForm = (data) => {
    const elem = document.createElement('div')
    elem.className = 'add-task-form'
    elem.innerHTML = `
        <div class='heading'>Добавить задачу</div>
        <form> 
            <div class="input title">
                <label for="">Заголовок</label>
                <input type="text" placeholder="Введите название задачи">
                <div class="hint">Проверьте правильность введенных данных</div>
            </div>

            <div class="input url">
                <label for="">URL</label>
                <input type="text" placeholder="Введите url проекта">
                <div class="hint">Проверьте правильность введенных данных</div>
            </div>

            <div class="textarea description">
                <label for="">Описание</label>
                <textarea placeholder="Опишите задачу"></textarea>
                <div class="hint">Проверьте правильность введенных данных</div>
            </div>


            <div class='row'>
                <div class="input date-start">
                    <label for="">Дата начала</label>
                    <input type="text" placeholder="Введите дату начала">
                    <div class="hint">Проверьте правильность введенных данных</div>
                </div>

                <div class="input date-finish">
                    <label for="">Дата завершения</label>
                    <input type="text" placeholder="Введите дату завершения">
                    <div class="hint">Проверьте правильность введенных данных</div>
                </div>
            </div>

        </form>
        <div class='row form-controls'></div>
    `

    if (data) {
        elem.querySelector('.title input').value = data.title
        elem.querySelector('.url input').value = data.url
        elem.querySelector('.description textarea').value = data.description
        elem.querySelector('.date-start input').value = data.date_start
        elem.querySelector('.date-finish input').value = data.date_finish
    }


    let inputStart = elem.querySelector('.date-start input')
    let inputFinish = elem.querySelector('.date-finish input')

    new AirDatepicker (inputStart, {
        position: 'top center',
        dateFormat: 'dd.MM.yyyy'
    })
    new AirDatepicker (inputFinish, {
        position: 'top center',
        dateFormat: 'dd.MM.yyyy'
    })

    const CancelButton = createButton(null, 'Отменить', 'basic')

    CancelButton.addEventListener('click', (e) => {
        removeModal ()
    })


    const SaveButton = createButton(null, 'Добавить', 'primary')

    SaveButton.addEventListener('click', ()=> {

        let newID = btoa(new Date().toISOString()).slice(-11)

        let formData = {
            id: (data && data.id) ? data.id : newID,
            title: elem.querySelector('.title input').value,
            url: elem.querySelector('.url input').value,
            status: 'new',
            description: elem.querySelector('.description textarea').value,
            date_start: elem.querySelector('.date-start input').value,
            date_finish: elem.querySelector('.date-finish input').value
        }

        if (!validateForm(formData, elem)) return

        if (!data) {
            Store.tasks.push(formData)
        } else {
            Store.tasks.forEach((element, i) => {
                if (element.id === data.id) {
                    Store.tasks[i] = formData
                }
            })
        }
        
        saveDataLS ()

        updateTasklist()
        
        removeModal ()
    })

    elem.querySelector('.form-controls').append(
        CancelButton,
        SaveButton
    )

    return elem

}