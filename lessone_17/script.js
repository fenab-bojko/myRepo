const $buttonSlideCollection = document.querySelectorAll('.button-slide')

const $itemCollection = document.querySelectorAll('.item-carousel')

const $containerCarousel = document.querySelector('.container-carousel')

const $indicatorCollection = document.querySelectorAll('.indicator')

let widthItem = $containerCarousel.offsetWidth

let itemColectionLength = $itemCollection.length

let loop = 1

let translate = 0

let indexIndicator = 0

const handlerClickButton = (e) => {

    if (e.target.classList.contains('prev')) {

        if(!translate) {

            if (!loop) return

            translate = -(itemColectionLength - 1) * widthItem

        } else {

            translate += widthItem

        }

    } else if (e.target.classList.contains('next')){

        if(translate === -(itemColectionLength - 1) * widthItem ) {

            if (!loop) return

            translate = 0

        } else {

            translate -= widthItem

        }
    
    }

   $containerCarousel.style.transform='translateX(' + translate + 'px)'

   indexIndicator = Math.abs(translate / widthItem)

   indicatorActive(indexIndicator)

}

const handlerClickIndicator = (event) => {

    switch (event.target.dataset.index){

        case '0': translate = 0
        break

        case '1': translate =  -(widthItem)
        break

        case '2': translate= -(widthItem * 2)
        break   
    }

    $containerCarousel.style.transform='translateX(' + translate + 'px)'

    indicatorActive(+event.target.dataset.index)

}

const indicatorActive = (indexIndicator) => {
    
    $indicatorCollection.forEach((e, i) => {

        e.className = 'indicator'

        i === indexIndicator ? e.classList.add('indicator-active') : ''

    })
  
}

indicatorActive(indexIndicator)

$buttonSlideCollection.forEach((e) => {

    e.addEventListener('click', handlerClickButton)

})

$indicatorCollection.forEach((event) => {

    event.addEventListener('click', handlerClickIndicator)
 
})