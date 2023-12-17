import '../fade/fade.scss'
import { createModalAddTask } from '../modal/modal-add-task.js'
import { createModalSettings } from '../modal/modal-settings'
import { closeFade } from './fadeClose.js'

export const createFade = (type, date) => { 
    const $fade = document.querySelector ('.fade') 
 
    const elem = document.createElement('div')
    elem.className = 'fade'

    let modal = ''

    switch (type) {
        case 'add-task': 
            modal = createModalAddTask ()
            break

        case 'settings': 
            modal = createModalSettings ()
            break

        case 'edit-task':
            modal = createModalAddTask(date)
            break
        case '':
            break
    }

    elem.append(modal)

    document.getElementById('app').append(elem)

    elem.addEventListener ('click', (e) => {
        e.target === e.currentTarget ? closeFade () : null
    })

    return elem
}