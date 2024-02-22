const arr = [-3, -1, 0, 2, 3, 6]
k = 6
//  ==> [0,6]

const sumArr = (arr = [], k) => {
    const result = []
    let i = 0
    let y = arr.length - 1
    const arrLenght = arr.length / 2
    // console.log(arrLenght)

    for (let key in arr) {
        let sum = arr[i] + arr[y]
        if (key < arrLenght) {
            if (sum === k ) {
            result.push(arr[i], arr[y])
            return result
            }
            if (sum > k) --y
            if (sum < k) ++i
        }
    }
    return result
}

const res = sumArr(arr, k)

console.log(res)