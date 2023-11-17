const baseUsers = {
    user1: {

    email: 'ivan@gmail.com',

    password: '&$9yst_32hd',

    }
}



const checkUser = (email, password) => {
    const userEmail = document.querySelector('#userEmail').value 
    const userPassword = document.querySelector('#userPassword').value
    console.log(userEmail)
    console.log(userPassword)
    console.log('enter')
    if (baseUsers.user1.email === email && baseUsers.user1.password === password) {
        $fade.className = 'fade hidden'
    }

}

const $fade = document.querySelector('.fade')
const $modal = document.getElementById('modal')

const $buttonLogIn = document.querySelectorAll('.button')

const $fade = document.querySelector('.fade')

const clickLogIn = (elem) => {
    switch(elem.target.dataset.name) {
        case 'log_in': $fade.className = 'fade'
        break
        case 'cancel': $fade.className = 'fade hidden'
        break
        case 'enter': checkUser(userEmail, userPassword)
    }
    // if (elem.target.dataset.name === 'log_in') {
    //     $fade.className = 'fade'
    // }

}



$buttonLogIn.forEach((e) => {

    e.addEventListener('click', clickLogIn)

})

$fade.addEventListener('click',() => {

    if (e.target.classList.contain('fade')) {
        $fade.className = 'fade hidden'
    }
})


const createModal = () => {



}

createModal()