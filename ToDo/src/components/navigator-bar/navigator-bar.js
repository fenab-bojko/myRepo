import { createButton } from '../button/button'
import '../navigator-bar/navigator-bar.scss'

export const createNavigatorBar = () => {

    const elem = document.createElement ('div')
    elem.className = 'navigator-bar'

    const $buttonCheck = createButton ('<img src="./public/check-tabs.svg" data-name="tabs-check">', null,'sitebar-active', 'tabs-check')
    const $buttonFlag = createButton ('<img src="./public/flag-tabs.svg" data-name="tabs-flag">', null,'sitebar', 'tabs-flag')

    elem.append($buttonCheck, $buttonFlag)

    return elem
}