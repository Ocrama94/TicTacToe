let currentBoard = [0,0,0, 0,0,0, 0,0,0];

let win1 = (currentBoard[0]==currentBoard[1] && currentBoard[0]==currentBoard[2]) && (currentBoard[0] == "X" || currentBoard[0] == "O");
//[1,1,1 , 0,0,0 , 0,0,0];
let win2 = (currentBoard[0]==currentBoard[3] && currentBoard[0]==currentBoard[6]) && (currentBoard[0] == "X" || currentBoard[0] == "O");                     
//[1,0,0 , 1,0,0 , 1,0,0];
let win3 = (currentBoard[0]==currentBoard[4] && currentBoard[0]==currentBoard[8]) && (currentBoard[0] == "X" || currentBoard[0] == "O");                     
//[1,0,0 , 0,1,0 , 0,0,1];
let win4 = (currentBoard[1]==currentBoard[4] && currentBoard[1]==currentBoard[7]) && (currentBoard[1] == "X" || currentBoard[1] == "O");                     
//[0,1,0 , 0,1,0 , 0,1,0];
let win5 = (currentBoard[2]==currentBoard[4] && currentBoard[2]==currentBoard[6]) && (currentBoard[2] == "X" || currentBoard[2] == "O");                     
//[0,0,1 , 0,1,0 , 1,0,0];
let win6 = (currentBoard[2]==currentBoard[5] && currentBoard[2]==currentBoard[8]) && (currentBoard[2] == "X" || currentBoard[2] == "O");                     
//[0,0,1 , 0,0,1 , 0,0,1];
let win7 = (currentBoard[3]==currentBoard[4] && currentBoard[3]==currentBoard[5]) && (currentBoard[3] == "X" || currentBoard[3] == "O");                     
//[0,0,0 , 1,1,1 , 0,0,0];
let win8 = (currentBoard[6]==currentBoard[7] && currentBoard[6]==currentBoard[8]) && (currentBoard[6] == "X" || currentBoard[6] == "O");                     
//[0,0,0 , 0,0,0 , 1,1,1];

let winCondition = win1 || win2 || win3 || win4 || win5 || win6 || win7 || win8;

let winTest1 = ["O","O","O",];// [0,1,2]
let winTest2 = [0,3,6];
let winTest3 = [0,4,8];
let winTest4 = [1,4,7];
let winTest5 = [2,4,6];
let winTest6 = [2,5,8];
let winTest7 = [3,4,5];
let winTest8 = [6,7,8];


let row1col1 = document.querySelector("#row1col1");
let row1col2 = document.querySelector("#row1col2");
let row1col3 = document.querySelector("#row1col3");
let row2col1 = document.querySelector("#row2col1");
let row2col2 = document.querySelector("#row2col2");
let row2col3 = document.querySelector("#row2col3");
let row3col1 = document.querySelector("#row3col1");
let row3col2 = document.querySelector("#row3col2");
let row3col3 = document.querySelector("#row3col3");
let row = document.querySelectorAll(".row");
let col = document.querySelectorAll(".col-4");

let turn = "user";
let reset = document.querySelector("#button");
let h1 = document.querySelector("h1");
let n_turno = 0;




// Reset griglia
reset.addEventListener("click", function(){
    col.forEach((element) =>{
        element.innerHTML = "";
        turn = "user";
        h1.innerHTML = "tic tac toe";
        element.style.color = "inherit";
        currentBoard = [0,0,0, 0,0,0, 0,0,0];
        console.clear();
        console.log(currentBoard);
        
    });
    firstBotMove();
});


// riporta l'array sulla griglia
function writeBoard(){

    col.forEach((element,index) => {
        if(currentBoard[index] != 0){
        element.innerHTML = currentBoard[index];
        }
    });
    checkWin();



}

//prima mossa casuale del bot
function firstBotMove(){

    let num1 = Math.floor(Math.random() * 9);
    currentBoard[num1] = "O";
    writeBoard();
    
}



//input user
col.forEach((element, index) =>{
    element.addEventListener("click", function(){
        if(turn == "user" && currentBoard[index] == 0){
            currentBoard[index] = "X";
            turn = "bot"
            console.log(currentBoard);
            writeBoard();

            setTimeout(minimax,500);

        }
        
    })
    
});




//minimax
// function minimax(){
//     if(turn == "bot"){
//         currentBoard[currentBoard.indexOf(0)] = "O";
//         turn = "user"
//         writeBoard();
//     }
// };

function minimax() {
  let emptyCells = [];
  let compareBoard;
  currentBoard.forEach((element, index) => {
        if (element === 0 || element === "O") {
        emptyCells.push(index);
        }
    });

    for (let i = 0; i < emptyCells.length; i++) {
        compareBoard = emptyCells.slice(i, i + 3);
        // console.log(emptyCells + " win");
        if (
        (compareBoard === winTest1 ||
            winTest2 ||
            winTest3 ||
            winTest4 ||
            winTest5 ||
            winTest6 ||
            winTest7 ||
            winTest8) &&
        compareBoard.length === 3
        ) {
            i=10;
        }
        // console.log(emptyCells);
    }

    switch(n_turno){
        case 1: {currentBoard[compareBoard[0]] = "O"; break;}
        case 2: {currentBoard[compareBoard[1]] = "O"; break;}
        case 3: {currentBoard[compareBoard[2]] = "O"; break;}
        case 4: {currentBoard[compareBoard[0]] = "O"; break;}
        case 5: {currentBoard[compareBoard[1]] = "O"; break;}
    }
    console.log(n_turno);
    console.log(currentBoard[compareBoard[0]]);
n_turno++;
  turn = "user";
  writeBoard();
}





//trigger inizio partita
firstBotMove();


// controllo vincita
function checkWin(){
    let win1 = (currentBoard[0]==currentBoard[1] && currentBoard[0]==currentBoard[2]) && (currentBoard[0] == "X" || currentBoard[0] == "O");                     //[1,1,1 , 0,0,0 , 0,0,0];
    let win2 = (currentBoard[0]==currentBoard[3] && currentBoard[0]==currentBoard[6]) && (currentBoard[0] == "X" || currentBoard[0] == "O");                     //[1,0,0 , 1,0,0 , 1,0,0];
    let win3 = (currentBoard[0]==currentBoard[4] && currentBoard[0]==currentBoard[8]) && (currentBoard[0] == "X" || currentBoard[0] == "O");                     //[1,0,0 , 0,1,0 , 0,0,1];
    let win4 = (currentBoard[1]==currentBoard[4] && currentBoard[1]==currentBoard[7]) && (currentBoard[1] == "X" || currentBoard[1] == "O");                     //[0,1,0 , 0,1,0 , 0,1,0];
    let win5 = (currentBoard[2]==currentBoard[4] && currentBoard[2]==currentBoard[6]) && (currentBoard[2] == "X" || currentBoard[2] == "O");                     //[0,0,1 , 0,1,0 , 1,0,0];
    let win6 = (currentBoard[2]==currentBoard[5] && currentBoard[2]==currentBoard[8]) && (currentBoard[2] == "X" || currentBoard[2] == "O");                     //[0,0,1 , 0,0,1 , 0,0,1];
    let win7 = (currentBoard[3]==currentBoard[4] && currentBoard[3]==currentBoard[5]) && (currentBoard[3] == "X" || currentBoard[3] == "O");                     //[0,0,0 , 1,1,1 , 0,0,0];
    let win8 = (currentBoard[6]==currentBoard[7] && currentBoard[6]==currentBoard[8]) && (currentBoard[6] == "X" || currentBoard[6] == "O");                     //[0,0,0 , 0,0,0 , 1,1,1];
    let winCondition = win1 || win2 || win3 || win4 || win5 || win6 || win7 || win8;

    if(win1){
        if(currentBoard[0] == "X"){
            h1.innerHTML = "user vince!";
        }else{
            h1.innerHTML = "bot vince!";
        };
        
        turn = " ";
        row1col1.style.color = "yellow"
        row1col2.style.color = "yellow"
        row1col3.style.color = "yellow"
    }else if(win2){
        if(currentBoard[0] == "X"){
            h1.innerHTML = "user vince!";
        }else{
            h1.innerHTML = "bot vince!";
        };
        
        turn = " ";
        row1col1.style.color = "yellow"
        row2col1.style.color = "yellow"
        row3col1.style.color = "yellow"
    }else if(win3){
        if(currentBoard[0] == "X"){
            h1.innerHTML = "user vince!";
        }else{
            h1.innerHTML = "bot vince!";
        };
        
        turn = " ";
        row1col1.style.color = "yellow"
        row2col2.style.color = "yellow"
        row3col3.style.color = "yellow"
    }else if(win4){
        if(currentBoard[1] == "X"){
            h1.innerHTML = "user vince!";
        }else{
            h1.innerHTML = "bot vince!";
        };
        
        turn = " ";
        row1col2.style.color = "yellow"
        row2col2.style.color = "yellow"
        row3col2.style.color = "yellow"
    }else if(win5){
        if(currentBoard[2] == "X"){
            h1.innerHTML = "user vince!";
        }else{
            h1.innerHTML = "bot vince!";
        };        
        turn = " ";
        row1col3.style.color = "yellow"
        row2col2.style.color = "yellow"
        row3col1.style.color = "yellow"
    }else if(win6){
        if(currentBoard[2] == "X"){
            h1.innerHTML = "user vince!";
        }else{
            h1.innerHTML = "bot vince!";
        };        
        turn = " ";
        row1col3.style.color = "yellow"
        row2col3.style.color = "yellow"
        row3col3.style.color = "yellow"
    }else if(win7){
        if(currentBoard[3] == "X"){
            h1.innerHTML = "user vince!";
        }else{
            h1.innerHTML = "bot vince!";
        };        
        turn = " ";
        row2col1.style.color = "yellow"
        row2col2.style.color = "yellow"
        row2col3.style.color = "yellow"
    }else if(win8){
        if(currentBoard[6] == "X"){
            h1.innerHTML = "user vince!";
        }else{
            h1.innerHTML = "bot vince!";
        };        
        turn = " ";
        row3col1.style.color = "yellow"
        row3col2.style.color = "yellow"
        row3col3.style.color = "yellow"
    }
}
