let endGame = false

window.onload = () => {
    console.log('loaded')
    let cells = document.getElementsByClassName('cell')
    let turnX = false
     for (const cell of cells) {

            cell.onclick = (event) => {

                if (!finish() && !endGame){
                    const [, x, y] = event.target.id.split('-') 
                    //console.log(`click on ${x}:${y}`)
            
                    if (cell.className === 'cell' && turnX == false){
                        cell.className = 'cell-o'
                        youWin(turnX)
                        turnX = true
                        changeTurn(turnX)
                    }
    
                    else if (cell.className === 'cell' && turnX == true) {
                        cell.className = 'cell-x'
                        youWin(turnX)
                        turnX = false
                        changeTurn(turnX)
                    }
                }         
                else {
                    alert("SE ACABO")
                }
            }
    }
}


function resetTable(){
    endGame = false
    let cells = document.querySelectorAll("[class*='cell']")
    let turncell = document.getElementById('turn')
    for (const cell of cells) {
            cell.className = 'cell'
            turncell.className = 'turn-o'   
    }
}


function checkDiagonaleOne(turnX){
    let diagonalOneCompleted = false
     let currentTurn = ''
     if (turnX == true){
         currentTurn = 'cell-x'
     }else {
         currentTurn = 'cell-o'
     }
     let diagonalOneCount = 0
     for (let i=0; i<3; i++){
        let testedDiagonaAccount = document.getElementById(`cell-${i}-${i}`)
        if (testedDiagonaAccount.className == currentTurn){
            diagonalOneCount++
        }
        if (diagonalOneCount == 3) {
            diagonalOneCompleted = true
            break
        }
     }
     if (diagonalOneCompleted == true){
        return true
    }
    return false
}

function checkDiagonalTwo(turnX){
    let diagonalTwoCompleted = false
     let currentTurn = ''
     if (turnX == true){
         currentTurn = 'cell-x'
     }else {
         currentTurn = 'cell-o'
     }
     let a = document.getElementById(`cell-${0}-${2}`)
     let b = document.getElementById(`cell-${1}-${1}`)
     let c = document.getElementById(`cell-${2}-${0}`)
   
     if (a.className == currentTurn &&  b.className == currentTurn && c.className == currentTurn){
        diagonalTwoCompleted = true
    }
     if (diagonalTwoCompleted == true){
        return true
    }
    return false
}


function checkRow(turnX){
     //let cells = document.querySelectorAll("[class*='cell']")
     let columnCompleted = false
     let currentTurn = ''
     if (turnX == true){
         currentTurn = 'cell-x'
     }else {
         currentTurn = 'cell-o'
     }
     //const [, x, y] = target.id.split('-')
     for (let i=0; i<3; i++){
        let columnCount = 0
         for (let j=0; j<3; j++){
             let testedColumn = document.getElementById(`cell-${i}-${j}`)
         if (testedColumn.className == currentTurn){
             columnCount++
         }
         }
         if (columnCount == 3) {
             columnCompleted = true
             break
         }
     }
     if (columnCompleted == true){
         return true
     }
     
     return false
}

function checkColumns(turnX){
    //let cells = document.querySelectorAll("[class*='cell']")
    let columnCompleted = false
    let currentTurn = ''
    if (turnX == true){
        currentTurn = 'cell-x'
    }else {
        currentTurn = 'cell-o'
    }
    //const [, x, y] = target.id.split('-')
    for (let i=0; i<3; i++){
        let columnCount = 0

        for (let j=0; j<3; j++){
            let testedColumn = document.getElementById(`cell-${j}-${i}`)
        if (testedColumn.className == currentTurn){
            columnCount++
        }
        }
        if (columnCount == 3) {
            columnCompleted = true
            break
        }
    }

    if (columnCompleted == true){
        return true
    }
    
    return false
}

function youWin(turnX){
   let result = checkRow(turnX)
   if (result && !endGame) {
    endGame = true
    alert('has ganado')
    return true
   }

   result = checkColumns(turnX)
   if (result && !endGame) {
    endGame = true
    alert('has ganado')
    return true
   }
   result = checkDiagonaleOne(turnX)
   if (result && !endGame) {
    endGame = true
    alert('has ganado')
    return true
   }

   result = checkDiagonalTwo(turnX)
   if (result && !endGame) {
    endGame = true
    alert('has ganado')
    return true
   }
   // checkDiagonales()
   return false
}

function finish(){
    let listCells = document.getElementsByClassName('cell')
    if (listCells.length == 0){
        return true
    }
    return false
}

function changeTurn(turnX){
    let turn = document.getElementById('turn')
    if (!turnX){
        turn.className = 'cell-o'
    }
    else {
        turn.className = 'cell-x'
    }
}
