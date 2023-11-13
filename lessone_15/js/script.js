const arrayOfItems = document.querySelectorAll('.accordion-item')

// console.log(arrayOfItems)
let indexShow = 0

function toggleAccordion(index) {

  indexShow = index
  let $accordionItem = arrayOfItems[index]

  if ($accordionItem.children[1].classList.contains('show')) {

    $accordionItem.children[0].children[0].classList.add('collapsed')
    $accordionItem.children[1].classList.remove('show')

  } else {

    for (let i = 0; i < arrayOfItems.length; i++) {

      arrayOfItems[i].children[1].classList.remove('show')
      arrayOfItems[i].children[0].children[0].classList.add('collapsed')

    }

    $accordionItem.children[1].classList.add('show')
    $accordionItem.children[0].children[0].classList.remove('collapsed')
  }

  return
}




// let counter = 0 

// for( let i = 0; i < arrayOfItems; i++) {
//   let item = arrayOfItems[i]
//   item.addEventListener('click', (e) => {

//     if(e.target.classList.contains('.accordion-button')){

//       toggleAccordion(i)
//     }

//   })
//   counter++
// }

// document.querySelectorAll('.accordion-item')[0].addEventListener('click', (event) => {

//   if(event.target.classList.contains('.accordion-button')) {

//     toggleAccordion(0)
//   }
  
  
  // console.dir('carentTarget' + event.currentTarget)
// })


// const tabe = document.querySelectorAll('li')
// console.log(tabe)

// tabe.forEach((li) => {

//     li.addEventListener('click', clickTabe)

//     function clickTabe (this)  {

//         this.li.classList.add('active')

//     }
// })







// let accordion = document.getElementById('accordionExemple')
// accordion.addEventListener('click', (event) => {
//     index = arrayOfItems.indexOf(event.target)
// })


// const arrayOfTabe = document.querySelectorAll('li')




// arrayOfTabe.forEach((li) => {
//     li.addEventListener('click', () => {


//         // if (!(index < arrayOfTabe.length)) return

//         // if(arrayOfTabe[index].classList.contains('disabled')) return

//         for( let item of arrayOfTabe) {

//             item.classList.remove('active')

//         }

//         arrayOfTabe[index].classList.add('active')


//     return

//     })
// } )


// const toggleTabe = (index) => {

//     indexShowTabe = index
//     let $tabeShow = arrayOfTabe[index]

//     if(!(index < arrayOfTabe.length)) return
//     if($tabeShow.children[0].classList.contains('disabled')) return
    

//     for(let i=0; i<arrayOfTabe.length; i++) {

//         arrayOfTabe[i].children[0].classList.remove('active')

//     }

//         arrayOfTabe[index].children[0].classList.add('active')
    

//     return
   
// }
 