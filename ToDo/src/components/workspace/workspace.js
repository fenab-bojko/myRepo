import '../workspace/workspace.scss'
import { createHeader } from '../createHeader/createHeader'
import { createFiltersBar } from '../filtersbar/filtersbar'
import { createTasksContainer } from '../taskscontainer/taskscontainer'

export const createWorkSpace = () => {

    const elem = document.createElement('div')
    elem.className = 'workspace'

    const $header = createHeader ()
    const $filtersBar = createFiltersBar ()
    const $tasksContainer = createTasksContainer ()

    elem.append($header, $filtersBar, $tasksContainer)

    return elem
}

