/* 
sitebar: функция создает шапку приложения
workspace: функция создает рабочую зону приложения
*/ 
import '../ToDo/style.css'
import { createWorkSpace } from './src/components/workspace/workspace'
import { createSitebar } from './src/components/sitebar/sitebar'


window.Store = {
    tasks: [
        {
            id: 1,
            title: 'Поправить иконку на сайте',
            url: 'www.asd.ru',
            status: 'new',
            description: 'Описание задачи',
            date_start: '22.06.2022',
            date_finish: '25.07.2022',
        },
        {
            id: 2,
            title: 'Поправить иконку на сайте2',
            url: 'www.asd2.ru',
            status: 'new',
            description: 'Описание задачи 2',
            date_start: '22.01.2022',
            date_finish: '25.02.2022',
        },
    ],
}


const $container = document.getElementById('app')

const $sitebar = createSitebar ()

const $workspace = createWorkSpace ()

$container.append($sitebar, $workspace)



