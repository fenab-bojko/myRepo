import '../modal/modal-settings.scss'
import { createButton } from '../button/button'

export const createModalSettings = () => {
    const elem = document.createElement ('div')
    elem.className = 'modal-settings'
    
    elem.innerHTML = `<div class='head'>Настройки</div>`

    const buttonContainer = document.createElement ('div')
    buttonContainer.className = 'button-container'

    const cancelButton = createButton (null, 'Назад', 'basic modal', 'cancel')
    const addButton = createButton (null, 'Добавить', 'primory modal', 'record') 

    buttonContainer.append(cancelButton, addButton)

    elem.append(buttonContainer)

    return elem
}