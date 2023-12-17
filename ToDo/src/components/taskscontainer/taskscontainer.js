import '../taskscontainer/taskscontainer.scss'
import { createTaskList } from '../tasklisk/tasklist'


export const createTasksContainer = () => {

    const elem = document.createElement('div')
    elem.className = 'tasks-container'
    
    // elem.innerHTML = `
    //     <div class='head'>
    //         <div class='task'>
    //             <div class='check'><img src="./public/minus.svg"></div>
    //             <span>Задача</span>
    //             <img src="./public/arrow.svg">
    //         </div>
    //         <div class='status'>
    //             <span>Статус</span>
    //             <img class='hidden' src="./public/arrow.svg">
    //         </div>  
    //         <div class='description'>
    //             <span>Описание</span>
    //             <img class='hidden' src="./public/arrow.svg">
    //         </div>
    //         <div class='start'>
    //             <span>Начать с</span>
    //             <img class='hidden' src="./public/arrow.svg">
    //         </div>
    //         <div class='finish'>
    //             <span>Закончить до</span>
    //             <img class='hidden' src="./public/arrow.svg">
    //         </div>
    //         <div class='edit'></div>
    //     </div>
    // `

    const $tasklist = createTaskList ()

    elem.append($tasklist)

    return elem
}


