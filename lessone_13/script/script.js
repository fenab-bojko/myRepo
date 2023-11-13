// ______________________TASK 1__________________________
// function isPolindrom(str){
//     let result
//     let arr = []
//     let arrRevers = []
//     for(let i=0; i<str.length; i++){
//         arr.push(str[i])
//         arrRevers.unshift(str[i])
//     }
//     let strRevers = arrRevers.toString()
//     let str1 = arr.toString()
//     result = (str1 === strRevers ? 'polindrom' : 'not polindrom')
//     return result
// }
// let strUser = prompt('Введи предположительны полиндром')
// let a = isPolindrom(strUser)
// console.log(a)

// function isPolindrom(str){
//     let result
//     let arr = []
//     let arrRevers = []
//     for(let i=0; i<str.length; i++){
//         arr.push(str[i])
//         arrRevers.unshift(str[i])
//     }
//     function arrEqual(arrFirst, arrSecond){
//         if(arrFirst.length != arrSecond.length) return false

//         for(let i=0; i<arrFirst.length; i++){
//             if(arrFirst[i] != arrSecond[i]) return false    
//         }
//         return true
//     }
//     result = (arrEqual(arr, arrRevers) ? 'polindrom' : 'not polindrom')
//     return result
// }
// let strUser = prompt('Введи предположительны полиндром')
// let a = isPolindrom(strUser)
// console.log(a)





// ______________________TASK 2__________________________
// "http://www.ozon.ru/context/detail/id/19677670/"

// function getUrl(url){
//     let domain = ' '
//     let startDomain = url.indexOf('//') + 2
//     let finishDomain = url.indexOf('/', startDomain)
//     domain = url.substring(startDomain, finishDomain)
//     return domain
// }
// let url = prompt('URL-?')
// let a = getUrl(url)

// console.log(a)




// _________________________TASK 3____________________________________

// let str1 ='aas'
// let str2 = 'asa'

// if(str1.length != str2.length) return false

// for(let i=0; i<str1.length; i++){
//     for(let j=0; j<str2.length; j++){
//         if(str1[i] === str2[j]) return true
//     }
    
// }





// ___________________________TASK 4____________________________________
// function getMinMax (arr) {

//     let max = -Infinity
//     let min = +Infinity

//     for(let i=0; i<arr.length; i++){

//         if(arr[i]> max) max = arr[i]
    
//     }

//     for(let j=0; j<arr.length; j++){

//         if(arr[j] < min) min = arr[j]
//     }


//      let arrMax = arr.indexOf(max)
//      let arrMin = arr.indexOf(min)


//     let minTmp = arr[arrMin]
//     let maxTmp = arr[arrMax]

//     arr[arrMin] = maxTmp
//     arr[arrMax] = minTmp

// return arr
// }   
//     let arrUser = [1, 0, 3, 2, 4, 5, 6, 7, 8, 9]
//     console.log(getMinMax(arrUser))








// __________________________TASK 5___________________________________

// function isProgression(num){
//     let str = num.toString
//     for(let i=0; i<str.length; i++){
//         if((+str[i] % +str[i+1]) != 0 ) {
//             console.log(false)
//             return false    
//     }
//     console.log(true)
//      return true
// }
// }

// let numUser = prompt('num?')
// isProgression(+numUser)






// __________________TASK 6_________________________
function getSort(arr){
    
    let arrSorted = []
    
    for(let i=0; i<arr.length; i++){

        for(let j=0; j<arr.length - i; j++){

            if(arr[j] > arr[j+1]){

                let tmp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = tmp
            }
        }

    }
    

    

    return arrSorted
}

console.log(getSort([3, 7, 4]))
  












// function isAnagramm(str1, str2) {

//     if(str1.length !== str2.length) return false

//     let result

//     str1 = str1.toLowerCase()
//     str2 = str2.toLowerCase()

//     arr1 = str1.split('')
//     arr2 = str2.split('')

//     arr1 = arr1.sort()
//     arr2 = arr2.sort()

//     str1 = arr1.join('')
//     str2 = arr2.join('')
    
//     result = str1 === str2
    
//     return result

// }
//     console.log(isAnagramm('finder','friend'))










    // Split

// function split(str) {
//     let arr = []

//     for( let i=0; i<str.length; i++){

//         arr.push(str[i])

//     }
//  return arr
// }
    
// console.log( split('ahsdjshf'))


// sort

// function sort(arr){
    
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] > arr[i+1]){

//             let tmp = arr[i]
//             arr[i] = arr[i+1]
//             arr[i+1] = tmp
//         }

//     }
//     return arr
// }

// console.log(sort([f,d,s,g,f,r,e,s]))