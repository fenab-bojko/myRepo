import '../button/button.scss'
import { clickHub } from '../clickHub/clickhub'

export const createButton = (icon, title, type, dataset_name) => {
    const elem = document.createElement('div')

    elem.className = 'button ' + type
    elem.dataset.name = dataset_name

    if (icon) {
        if (title) {
            elem.innerHTML = `${icon} <span data-name='${dataset_name}'>${title}</span>`
        } else {
            elem.innerHTML = `${icon}`
        }
    } else {
        elem.innerHTML = `<span>${title}</span>`
    }

    elem.addEventListener ('click', (e) => {
        clickHub (e.target.dataset.name)
    })

    return elem
} 