const $calc = document.querySelectorAll('span')
const $windowCalc = document.querySelector('.input')
let result = []
let x = []

$calc.forEach((e, i) => {
    
    e.addEventListener('click', (e) => {

        enterInt(e, i)

    })

})

const enterInt = (e, i = 0) => {

    // console.log(e.target.innerHTML)

    let regexInt = new RegExp('[0-9]')

    // let regexMath = new RegExp('[+ - * /]')

    let int = e.target.innerHTML
    if(e.target.classList.contains ('dull')) {

        result = []
    
        x = []

        console.clear()

        console.log(result)

        console.log(x)
    }

    // console.log(typeof(int))
    
    if (regexInt.test(int)) {

        x.push(int)

        console.log(x)

    } else if (int === '+' || int === '-'|| int === '/' || int === '*') {

        result.push(x.join(''))

        result.push(int)

        // $windowCalc.innerHTML(x.toString())

        i++

        x = []

        console.log(result)

    } else if (int === '=') {

        let resultStr = ''

        result.push(x.join(''))

        result.push(int)

        console.log(result)

        // for(let item of result) {
        //     if (regexInt.test(item)) {
        //         resultStr = +item
        //     }

        // }

    
        resultStr = result.join(' ')

        console.log(parseInt(resultStr))
        

        result = []

        x = []

    }

        
    
    



}

const getCalculation = () => {



}