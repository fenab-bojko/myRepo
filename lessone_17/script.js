const $buttonSlideCollection = document.querySelectorAll('.button-slide')

const $itemCollection = document.querySelectorAll('.item-carousel')

const $containerCarousel = document.querySelector('.container-carousel')

const $indicatorCollection = document.querySelectorAll('.indicator')

let widthItem = 640

let itemColectionLength = $itemCollection.length

let translate = 0


const handlerClickButton = (e) => {
    // console.dir(e.target)

    if (e.target.classList.contains('prev')) {

        if(!translate) {

            translate = -(itemColectionLength - 1) * widthItem

        } else {

            translate += widthItem

        }

    } else if (e.target.classList.contains('next')){

        if(translate === -(itemColectionLength - 1) * widthItem ) {

            translate = 0
        } else {

            translate -= widthItem

        }
    
    }

   $containerCarousel.style.transform='translateX(' + translate + 'px)'

   indicatorActive()

}

const handlerClickIndicator = (event) => {

//    console.log(event.target.dataset.index) 
    switch (event.target.dataset.index){

        case '0': translate = 0
        break

        case '1': translate =  -640
        break

        case '2': translate= -1280
        break   
    }

    $containerCarousel.style.transform='translateX(' + translate + 'px)'
    
    indicatorActive()

}

const indicatorActive = () => {
    for (i=0; i<itemColectionLength; i++) {

        $indicatorCollection[i].classList.remove('indicator-active')

    }

    if (translate === 0) {

        $indicatorCollection[0].classList.add('indicator-active')

    } else if (translate === -640) {

        $indicatorCollection[1].classList.add('indicator-active')

    } else if (translate === -1280) {

        $indicatorCollection[2].classList.add('indicator-active')

    }
}

indicatorActive()

$buttonSlideCollection.forEach((e) => {

    e.addEventListener('click', handlerClickButton)

})

$indicatorCollection.forEach((event) => {

    event.addEventListener('click', handlerClickIndicator)
 
})