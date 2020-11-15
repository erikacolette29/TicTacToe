
/// DEAR GOD IT'S ALIVE!!!!!
/*-------------------------------- Constants --------------------------------*/
const colors = {
    'null': 'Purple',
     '1': 'Orange',
     '-1': 'Crimson',
}

const winningCombination = [ [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
// 0 -7 index 

/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner;

/*------------------------ Cached Element References ------------------------*/
const messageText = document.getElementById('message')
const squareBox = document.querySelectorAll('.square') 
const replayBtn = document.getElementById('replay-btn')

/*----------------------------- Event Listeners -----------------------------*/
document.querySelector('.board').addEventListener('click', handleClick)


document.querySelector('#replay-btn').addEventListener('click', reset)


/*-------------------------------- Functions --------------------------------*/
reset();


function reset(){
    board = ['null','null','null','null','null','null','null','null','null',]
    turn = 1
    winner = null
    render()
    
};


function handleClick(click){
 
    let idx = parseInt(click.target.id)
    if(board[idx] != 'null') { // can't click twice if clicked
        return; // don't flip turn
    }
    board[idx] = turn;
    turn *= -1; // flip turn 
    winner = theWinner(idx);
    render();

};


function theWinner(idx){
if (
board[0] + board[1] + board[2] === 3 ||
board[3] + board[4] + board[5] === 3 ||
board[6] + board[7] + board[8] === 3 ||

board[0] + board[3] + board[6] === 3 ||
board[1] + board[4] + board[7] === 3 ||
board[2] + board[5] + board[8] === 3 ||

board[0] + board[4] + board[8] === 3 ||
board[6] + board[4] + board[2] === 3 

) {
    return 1;
}
if (
board[0] + board[1] + board[2] === -3 ||
board[3] + board[4] + board[5] === -3 ||
board[6] + board[7] + board[8] === -3 ||

board[0] + board[3] + board[6] === -3 ||
board[1] + board[4] + board[7] === -3 ||
board[2] + board[5] + board[8] === -3 ||

board[0] + board[4] + board[8] === -3 ||
board[6] + board[4] + board[2] === -3 
    
    ) {
        return -1;
    }
// for (element in winningCombination){
// let a, b, c;
// [a,b,c] = element;
// console.log(element)
// console.log(a,b,c)
// if (Math.abs(board[a] + board[b] + board[c]) === 3) {
//     console.log(board[a]);
// return board[a]; // return either 1 or -1
// }
//   }
//   console.log(board)
  if(!board.includes('null')){
      return 'T';
  } // can't find null on the board 
  return 0;

}


function render() {

board.forEach(function(sq, indx) {
    squareBox[indx].style.backgroundColor = colors[sq];
});


if(winner === 1 || winner === -1) {
    messageText.innerHTML = `Player ${colors[winner]} has won!`;
    confetti.start(1500);
   
} else if (winner === 'T'){
    messageText.innerHTML = `Its a Cats Game!`
} else {
    messageText.innerHTML =  `Lez Play! It's ${colors[turn]}'s turn!`;
}


}

