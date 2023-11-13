const $controlElements = document.querySelectorAll('.controls')

const $caruselContainer = document.querySelector('.carusel-container')

const $caruselIndicators = document.querySelectorAll('.dot')

let $caruselItems = document.querySelectorAll('.carusel-item')

let getCaruselLength = $caruselItems.length

let itemWidth = 600

let translate = 0

let controlsClickHandler = (event) => {
    console.dir(event)
    if (event.target.classList.contains('prev')) {
 
        if(translate === 0) return
        
        $caruselContainer.style.transform = 'translateX(' + (translate += itemWidth)  + 'px)'

    } else if (event.target.classList.contains('next')) {

        if(translate === -((getCaruselLength - 1) * itemWidth)) return
        
        $caruselContainer.style.transform = 'translateX(' + (translate -= itemWidth)  + 'px)'

    }
    
    
return
}

let controlsClickIndicators = (e) => {
    console.dir(e.target)
    if(e.target.classList.contains('a1')) {
        console.log(1)
        $caruselContainer.style.transform = 'translateX(0px)'
        e.target.classList.add('dot:active')

    } else if (e.target.classList.contains('a2')) {
        console.log(2)
        $caruselContainer.style.transform = 'translateX(-600px)'
        e.target.classList.add('dot:active')

    } else if (e.target.classList.contains('a3')) {
        console.log(3)
        $caruselContainer.style.transform = 'translateX(-1200px)'
        e.target.classList.add('dot:active')
    }
return
} 

console.log(translate)

switch (translate) {

    case '0': 
        console.log('switch 0')
        $caruselIndicators.a1.classList.add('.dot-item')

    break

    case '-600':
        console.log('switch 600')
         $caruselIndicators.a2.classList.add('.dot-item')

    break
    
    case '-1200':
        console.log('switch 1200')
         $caruselIndicators.a3.classList.add('.dot-item')

    break

}
 


$controlElements.forEach(

    (elem) => {

        elem.addEventListener('click', controlsClickHandler)
        
    return

    }
)

$caruselIndicators.forEach(
    (elem) => {

        elem.addEventListener('click', controlsClickIndicators)
    }
)



