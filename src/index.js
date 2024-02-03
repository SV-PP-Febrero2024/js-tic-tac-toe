window.onload = () => {
    console.log('loaded')

    // let cells = <GET ALL cell ELEMENTS> - ya está
    let cells = document.getElementsByClassName('cell')
    let turnX = false
     for (const cell of cells) {
        cell.onclick = (event) => {
            let listCells = document.getElementsByClassName('cell')
            console.log(listCells)
            if (listCells.length != 0){
                const [, x, y] = event.target.id.split('-')
                console.log(`click on ${x}:${y}`)

                if (cell.className === 'cell' && turnX == false){
                    cell.className = 'cell-o'
                    turnX = true
                }

                else if (cell.className === 'cell' && turnX == true) {
                    cell.className = 'cell-x'
                    turnX = false
                }
            } else {
                alert("SE ACABO")
            }
            
        }
    
    }
    
}


function resetTable(){
    let cells = document.querySelectorAll("[class *='cell']")
    for (const cell of cells) {
        cell.className = 'cell'
    }




}
