import { createFade } from "../fade/fade"
import { closeFade } from "../fade/fadeClose"
import { recordTask } from "../record-task/record-task"


export const clickHub = (type) => {

    

    switch (type) {

        case 'add-task': 
            createFade (type)
            break
        case 'settings': 
            createFade (type) 
            break
        case 'record': 
            recordTask ()
            break
        case 'cancel': 
            closeFade ()
            break
    }

}