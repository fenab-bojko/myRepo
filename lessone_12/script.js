let board = [
    [1,2,3,4,5,6,7,8],
    [9,10,11,12,13,14,15,16],
    [17, 18,19,20,21,22,23,24]
]

// console.log(board[0][3])
let abc = ['a', 'b', 'c']

for(let i=0; i<board.length; i++){
    
    for(let k=0; k<board[i].length; k++){
        if(board[i][k]%2 === 1 ){continue} 
        console.log(board[i][k] +' '+'позиция'+' '+abc[i] + k)
    }
}
