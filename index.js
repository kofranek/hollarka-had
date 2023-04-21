// ********* Initisalisation game **********************

//canvas
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")

const tileSize = 50
const tileCountX = 8
const tileCountY = 8

let snakePosX=0
let snakePosY=Math.floor(tileCountY/2)*tileSize

//canvas size
canvas.width = tileSize * tileCountX
canvas.height = tileSize * tileCountY

drawStuff()

function drawStuff() {
    //draw background
    rectangle('#ffbf00', 0, 0, canvas.width, canvas.height)
    //draw grid
    drawGrid()
  }

/*** pomocné funkce ***/

  
//draw grid

  
function rectangle(color, x, y, w, h) {
    ctx.fillStyle = color
    ctx.fillRect(x, y, w, h)
  }
  
  
