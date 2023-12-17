import '../createHeader/createHeader.scss'
import { createButton } from '../button/button'


export const createHeader = () => {

    const elem = document.createElement('div')
    elem.className = 'header'
    elem.innerHTML = `
        <h1>Задачи</h1>
    `

    const $button = createButton ('<img src="./public/plus.svg">', 'Добавить задачу', 'primory', 'add-task')
    
    elem.append($button)

 
    return elem
}

