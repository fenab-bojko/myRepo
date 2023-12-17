import { createButton } from '../button/button'
import '../footer/footer.scss'

export const createFooter = () => {

    const elem = document.createElement ('div')
    elem.className = 'footer'

    elem.innerHTML = `
        <hr>
        <div class='avatar'><img src="./public/avatar.svg"></div>
    
    `

    const $buttonSettings = createButton ('<img src="./public/settings.svg" data-name="settings">', null, 'sitebar', 'settings')
    
    elem.prepend($buttonSettings)


    return elem
}