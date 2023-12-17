import '../filters/filters.scss'
import { createButton } from '../button/button'

export const createFilters = () => {
    const elem = document.createElement ('div')
    elem.className = 'filters'

    const $buton = createButton ('<img src="./public/filter.svg">', 'Фильтры', 'basic', 'filters')

    elem.append($buton)

    return elem
}