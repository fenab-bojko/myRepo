import { closeFade } from "../fade/fadeClose"
import { updateTaskList } from "../tasklisk/tasklist"

export const recordTask = () => {

    window.Store.tasks.push({
        id: new Date().getMilliseconds(),
        title: document.querySelector('#task').value,
        url: document.querySelector('#url').value,
        status: 'new',
        description: document.querySelector('#description').value,
        date_start: document.querySelector('#date-start').value,
        date_finish: document.querySelector('#date-finish').value,
    })

    updateTaskList()
    closeFade ()
}

