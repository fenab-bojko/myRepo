import '../sitebar/sitebar.scss'
import { createLogo } from '../logo/logo'
import { createNavigatorBar } from '../navigator-bar/navigator-bar'
import { createFooter } from '../footer/footer'

export const createSitebar = () => {

    const elem = document.createElement('div')
    elem.className = 'sitebar'

    const $logo = createLogo ('32px')
    const $navigator = createNavigatorBar ()
    const $footer = createFooter ()

    elem.append ($logo, $navigator, $footer)

    return elem
}