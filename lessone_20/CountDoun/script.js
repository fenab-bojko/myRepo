
const isError = () => {

    alert ('Не коректная дата!')

}

const isStart = () => {
    alert ('Lets ROCK!!!')
}

const startTimer = () => {
    const nowDate =(new Date().getFullYear() + '-' + new Date().getMonth()  + '-' + new Date().getDate()) 
    const date = document.querySelector('#time-to').value
    const isLeab = (+(new Date().getFullYear()) - 2000) % 4 === 0 ? true : false
    const isFebruary = new Date().getMonth() === '02' ? true : false 
    const isEven = (new Date().getMonth())



    if (+(date.slice(0, 4)) < +(nowDate.slice(0, 4))) isError()
    if (+(date.slice(0, 4)) === +(nowDate.slice(0, 4)) && +(date.slice(5,7)) < (+(nowDate.slice(5,7)) + 1)) isError()
    if (+(date.slice(0, 4)) === +(nowDate.slice(0, 4)) && +(date.slice(5,7)) === (+(nowDate.slice(5,7)) + 1) && +(date.slice(8)) < +(nowDate.slice(8))) isError()

    let resultYear = +(date.slice(0, 4)) - +(nowDate.slice(0, 4))
    let resultMonth = Math.abs (+(date.slice(5,7)) - (+(nowDate.slice(5,7)) + 1))
    let resultDay = Math.abs (+(date.slice(8)) - +(nowDate.slice(8)))

    if(!resultYear && !isLeab) resultDay = 365 * resultYear
    if(!resultYear && isLeab) resultDay = 366 * resultYear
    if(!resultMonth) resultDay = 30 * resultMonth
    if (!resultMonth && isFebruary && isLeab) resultDay = 29 * resultMonth
    if (!resultMonth && isFebruary && !isLeab) resultDay = 28 * resultMonth

    let second = 0 
    let minute = 0
    let hour = 0

    setInterval(() => {console.log(--second)}, 1000)


        if (second < 0) {
            --minute
            second = 59
        }
        if (minute < 0) {
            --hour
            minute = 59
        }
        if (hour < 0) {
            --resultDay
            hour = 23
        }
        if (resultDay < 0) isStart()

    
    // (04 || 06 || 09 || 11)
      console.log(hour)

      console.log(minute)
      console.log(second)
}






const $input = document.querySelector('.clock-input input')

$input.addEventListener('change', startTimer)

