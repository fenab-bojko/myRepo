
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

    const timer = {
        day: 0,
        hour: 12,
        minute: 0,
        second: 0,
        }
        
    if(!resultYear && !isLeab) resultDay = 365 * resultYear
    if(!resultYear && isLeab) resultDay = 366 * resultYear
    if(!resultMonth) resultDay = 30 * resultMonth
    if (!resultMonth && isFebruary && isLeab) resultDay = 29 * resultMonth
    if (!resultMonth && isFebruary && !isLeab) resultDay = 28 * resultMonth
    
    timer.day = resultDay

    setInterval(() => {
        timer.second--
        if (timer.second < 0) {
            timer.minute--
            second = 59
        }
        if (timer.minute < 0) {
            timer.hour--
            minute = 59
        }
        if (timer.hour < 0) {
            timer.day--
            hour = 23
        }
        if (timer.day < 0) {
            isStart()
            clearInterval()
        }
    }, 1000)


        
        


    
    // (04 || 06 || 09 || 11)
    
        console.log(timer.day)
      console.log(timer.hour)

      console.log(timer.minute)
      console.log(timer.second)
}






const $input = document.querySelector('.clock-input input')

$input.addEventListener('change', startTimer)

