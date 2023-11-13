// const arrayOfItems = document.querySelectorAll('.accordion-collapse')
// const arrayOfItemsHeader = document.querySelectorAll('.accordion-header')
// console.log(arrayOfItems)
// console.log(arrayOfItemsHeader)
// let indexShow = 0

// function toggleAccordion(index){
//     indexShow = index

//         if(arrayOfItems[index].classList.contains('show')){

//             arrayOfItems[index].classList.remove('show')
//             // arrayOfItemsHeader[index].setAttribute('style', 'backgroung-color: #FFF')
//             document.querySelector('.accordion-button:not(.collapsed)').setAttribute('style', 'background-color: #FFF')
//             document.createElement('style').innerHTML = `
//                 .accordion-button:not(.collapsed)::after{
//                     transform: none;
//                 }
//             `

//     }else{

//         for(let i=0; i<arrayOfItems.length; i++){
// setAttribute()
//             arrayOfItems[i].classList.remove('show')
//         }    

//         arrayOfItems[index].classList.add('show')

//     }
    
// return 
// }

const brokenLinks = ['vk', 'youtube', 'facebook']

const url = (brokenLinksArray) => {
    const link = []
    for(let item of brokenLinksArray){
        link.push('https://' + item + '.com')    
    }
    return link
}

console.log(url(brokenLinks))

