import '../filtersbar/filtersbar.scss'
import { createInput } from '../input/input'
import { createFilters } from '../filters/filters'

export const createFiltersBar = () => {

    const elem = document.createElement ('div')
    elem.className = 'filters-bar'

    const $filters = createFilters ()
    const $input = createInput ('input-search', '<img src="./public/search.svg">', 'Поиск', null)

    elem.append($filters, $input)

    return elem
}