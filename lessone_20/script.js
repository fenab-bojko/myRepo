// let USER = {

//     year: document.querySelector('#year').value,
//     month: document.querySelector('#month').value,
//     day: document.querySelector('#day').value,

// }

const button = document.querySelector('.button')
let zodiak = []

const isError = () => {

    alert('Не коректно!')

}

const calc = () => {

    const USER = {

        year: a,
        month: b,
        day: c,
    
    }

    // if(USER.year <= 1900 || USER.year > new Date.year()) isError()
    // if(1 <= USER.month <= 12) isError()
    // if(1 <= USER.day <= 31) isError()

    const nowDate = new Date()

    let userBerthday = new Date()

    userBerthday.setFullYear(USER.year, USER.mohth, USER.day)

    let age = userBerthday - nowDate
    console.log(age)
}

let a = document.querySelector('#year').value
let b = document.querySelector('#month').value
let c = document.querySelector('#day').value

button.addEventListener('click', calc)



