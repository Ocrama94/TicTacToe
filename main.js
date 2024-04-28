let row1col1 = document.querySelector("#row1col1");
let row1col2 = document.querySelector("#row1col2");
let row1col3 = document.querySelector("#row1col3");
let row2col1 = document.querySelector("#row2col1");
let row2col2 = document.querySelector("#row2col2");
let row2col3 = document.querySelector("#row2col3");
let row3col1 = document.querySelector("#row3col1");
let row3col2 = document.querySelector("#row3col2");
let row3col3 = document.querySelector("#row3col3");
let cells = document.querySelectorAll(".col-4");
let reset = document.querySelector("#button");
let turno = "user";
let h1 = document.querySelector("h1");



// Reset griglia
reset.addEventListener("click", function(){
    cells.forEach((value) =>{
        value.innerHTML = "";
        value.classList.remove("checked")
        value.classList.remove("user")
        value.classList.remove("bot")
        turno = "user";
        h1.innerHTML = "tic tac toe";
        cells.forEach((element)=>{
            element.style.color = "inherit";
        })
    });
});


// Input utente
cells.forEach((value) =>{
    value.addEventListener("click", function(){
    
        if(checkSelection(this) && turno === "user"){
            this.innerHTML = "X";
            this.classList.add("checked")
            this.classList.add("user")
            turno = "bot";
            
        }
        checkWin();

        if(turno ==="bot"){
            botSelection();
        }
        checkWin();


        
    })
    value.addEventListener("click", function(){
    
        if(checkSelection(this) && turno === "user"){
            this.innerHTML = "X";
            this.classList.add("checked")
            this.classList.add("user")
            turno = "bot";
            
        }
        checkWin();

        if(turno ==="bot"){
            botSelection();
        }
        checkWin();


        
    })

});

// controllo caselle già occcupate
function checkSelection(cell){
    if(cell.classList.contains("checked")){
        return false;
    }else{
        return true;
    }
};

//selezione randomica del bot
function botSelection(){
    cell_random_num = Math.floor((Math.random() * 9) +1);
    switch (cell_random_num){
        case 1: botInjectHTML(row1col1); break;
        case 2: botInjectHTML(row1col2); break;
        case 3: botInjectHTML(row1col3); break;
        case 4: botInjectHTML(row2col1); break;
        case 5: botInjectHTML(row2col2); break;
        case 6: botInjectHTML(row2col3); break;
        case 7: botInjectHTML(row3col1); break;
        case 8: botInjectHTML(row3col2); break;
        case 9: botInjectHTML(row3col3); break;
    }

}

//scritttura del bot
function botInjectHTML(cell){
    if(cell.classList.contains("checked")){
        botSelection();
    }else{
        cell.classList.add("checked")
        cell.classList.add("bot")
        turno = "user";
        cell.innerHTML = "O";
    }
}

// controllo vittoria
function checkWin(){
    let cond1_user = row1col1.classList.contains("user") && row1col2.classList.contains("user") && row1col3.classList.contains("user")
    let cond2_user = row1col1.classList.contains("user") && row2col1.classList.contains("user") && row3col1.classList.contains("user")
    let cond3_user = row1col1.classList.contains("user") && row2col2.classList.contains("user") && row3col3.classList.contains("user")
    let cond4_user = row1col2.classList.contains("user") && row2col2.classList.contains("user") && row3col2.classList.contains("user")
    let cond5_user = row1col3.classList.contains("user") && row2col2.classList.contains("user") && row3col1.classList.contains("user")
    let cond6_user = row1col3.classList.contains("user") && row2col3.classList.contains("user") && row3col3.classList.contains("user")
    let cond7_user = row2col1.classList.contains("user") && row2col2.classList.contains("user") && row2col3.classList.contains("user")
    let cond8_user = row3col1.classList.contains("user") && row3col2.classList.contains("user") && row3col3.classList.contains("user")
    
    let cond1_bot = row1col1.classList.contains("bot") && row1col2.classList.contains("bot") && row1col3.classList.contains("bot")
    let cond2_bot = row1col1.classList.contains("bot") && row2col1.classList.contains("bot") && row3col1.classList.contains("bot")
    let cond3_bot = row1col1.classList.contains("bot") && row2col2.classList.contains("bot") && row3col3.classList.contains("bot")
    let cond4_bot = row1col2.classList.contains("bot") && row2col2.classList.contains("bot") && row3col2.classList.contains("bot")
    let cond5_bot = row1col3.classList.contains("bot") && row2col2.classList.contains("bot") && row3col1.classList.contains("bot")
    let cond6_bot = row1col3.classList.contains("bot") && row2col3.classList.contains("bot") && row3col3.classList.contains("bot")
    let cond7_bot = row2col1.classList.contains("bot") && row2col2.classList.contains("bot") && row2col3.classList.contains("bot")
    let cond8_bot = row3col1.classList.contains("bot") && row3col2.classList.contains("bot") && row3col3.classList.contains("bot")
    

    if(cond1_user){
        h1.innerHTML = "user vince!";
        turno = " ";
        row1col1.style.color = "yellow"
        row1col2.style.color = "yellow"
        row1col3.style.color = "yellow"
    }else if(cond2_user){
        h1.innerHTML = "user vince!";
        turno = " ";
        row1col1.style.color = "yellow"
        row2col1.style.color = "yellow"
        row3col1.style.color = "yellow"
    }else if(cond3_user){
        h1.innerHTML = "user vince!";
        turno = " ";
        row1col1.style.color = "yellow"
        row2col2.style.color = "yellow"
        row3col3.style.color = "yellow"
    }else if(cond4_user){
        h1.innerHTML = "user vince!";
        turno = " ";
        row1col2.style.color = "yellow"
        row2col2.style.color = "yellow"
        row3col2.style.color = "yellow"
    }else if(cond5_user){
        h1.innerHTML = "user vince!";
        turno = " ";
        row1col3.style.color = "yellow"
        row2col2.style.color = "yellow"
        row3col1.style.color = "yellow"
    }else if(cond6_user){
        h1.innerHTML = "user vince!";
        turno = " ";
        row1col3.style.color = "yellow"
        row2col3.style.color = "yellow"
        row3col3.style.color = "yellow"
    }else if(cond7_user){
        h1.innerHTML = "user vince!";
        turno = " ";
        row2col1.style.color = "yellow"
        row2col2.style.color = "yellow"
        row2col3.style.color = "yellow"
    }else if(cond8_user){
        h1.innerHTML = "user vince!";
        turno = " ";
        row3col1.style.color = "yellow"
        row3col2.style.color = "yellow"
        row3col3.style.color = "yellow"


    }else if(cond1_bot){
        h1.innerHTML = "bot vince!";
        turno = " ";
        row1col1.style.color = "yellow"
        row1col2.style.color = "yellow"
        row1col3.style.color = "yellow"
    }else if(cond2_bot){
        h1.innerHTML = "bot vince!";
        turno = " ";
        row1col1.style.color = "yellow"
        row2col1.style.color = "yellow"
        row3col1.style.color = "yellow"
    }else if(cond3_bot){
        h1.innerHTML = "bot vince!";
        turno = " ";
        row1col1.style.color = "yellow"
        row2col2.style.color = "yellow"
        row3col3.style.color = "yellow"
    }else if(cond4_bot){
        h1.innerHTML = "bot vince!";
        turno = " ";
        row1col2.style.color = "yellow"
        row2col2.style.color = "yellow"
        row3col2.style.color = "yellow"
    }else if(cond5_bot){
        h1.innerHTML = "bot vince!";
        turno = " ";
        row1col3.style.color = "yellow"
        row2col2.style.color = "yellow"
        row3col1.style.color = "yellow"
    }else if(cond6_bot){
        h1.innerHTML = "bot vince!";
        turno = " ";
        row1col3.style.color = "yellow"
        row2col3.style.color = "yellow"
        row3col3.style.color = "yellow"
    }else if(cond7_bot){
        h1.innerHTML = "bot vince!";
        turno = " ";
        row2col1.style.color = "yellow"
        row2col2.style.color = "yellow"
        row2col3.style.color = "yellow"
    }else if(cond8_bot){
        h1.innerHTML = "bot vince!";
        turno = " ";
        row3col1.style.color = "yellow"
        row3col2.style.color = "yellow"
        row3col3.style.color = "yellow"
    }
};

