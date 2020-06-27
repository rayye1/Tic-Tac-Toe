let moveAreas = Array.from(document.querySelectorAll('.square'))
let squares = document.querySelectorAll('.square')
let resetBtn = document.querySelector('#reset')
let turn = true
let gameOver = false


const playerOne = (name) => {
    marker = 'X';
    score = 0;
    return {name, marker, score};
}

const playerTwo = (name) => {
    marker = 'O';
    score = 0;
    return {name, marker, score};
}


function playerMove() {
  let p1 = playerOne("dog")
  let p2 = playerTwo("dog")
  if (turn) {
    turn = false
    return p1.marker
  }
  else if (!turn) {
    turn = true
    return p2.marker
  }
}

squares.forEach(item => {
  item.addEventListener('click', function() {
    if (!item.classList.contains('occupied') && !gameOver) {
      item.textContent = playerMove()
      item.classList.add('occupied')
    }
    checkWinner()
  })
})

function checkWinner() {
  const tieCheck = (item) => item.textContent == 'X' || item.textContent == 'O'
  if (p1Wins()) {
    //Do Something
    console.log('P1 Wins')
    gameOver = true
  }
  else if(p2Wins()) {
    //Do Something
    console.log('P2 Wins')
    gameOver = true
  }
  else if (moveAreas.every(tieCheck)) {
    //Do Something
    console.log('Its a tie')
    gameOver = true
  }
}

function p1Wins() {
  if (moveAreas[0].textContent == 'X') {
    if (moveAreas[1].textContent == 'X' && moveAreas[2].textContent == 'X') {
        return true
    }
    else if (moveAreas[3].textContent == 'X' && moveAreas[6].textContent == 'X') {
        return true
    }
  }
  if (moveAreas[8].textContent == 'X') {
      if (moveAreas[2].textContent == 'X' && moveAreas[5].textContent == 'X') {
          return true
      }
      else if (moveAreas[7].textContent == 'X' && moveAreas[6].textContent == 'X') {
          return true
      }
  }
  if (moveAreas[4].textContent == 'X') {
      if (moveAreas[2].textContent == 'X' && moveAreas[6].textContent == 'X') {
          return true
      }
      else if (moveAreas[0].textContent == 'X' && moveAreas[8].textContent == 'X') {
          return true
      }
      else if (moveAreas[1].textContent == 'X' && moveAreas[7].textContent == 'X') {
          return true
      }
      else if (moveAreas[3].textContent == 'X' && moveAreas[5].textContent == 'X') {
          return true
      }
  }
}

function p2Wins() {
  if (moveAreas[0].textContent == 'O') {
    if (moveAreas[1].textContent == 'O' && moveAreas[2].textContent == 'O') {
        return true
    }
    else if (moveAreas[3].textContent == 'O' && moveAreas[6].textContent == 'O') {
        return true
    }
  }
  if (moveAreas[8].textContent == 'O') {
      if (moveAreas[2].textContent == 'O' && moveAreas[5].textContent == 'O') {
          return true
      }
      else if (moveAreas[7].textContent == 'O' && moveAreas[6].textContent == 'O') {
          return true
      }
  }
  if (moveAreas[4].textContent == 'O') {
      if (moveAreas[2].textContent == 'O' && moveAreas[6].textContent == 'O') {
          return true
      }
      else if (moveAreas[0].textContent == 'O' && moveAreas[8].textContent == 'O') {
          return true
      }
      else if (moveAreas[1].textContent == 'O' && moveAreas[7].textContent == 'O') {
          return true
      }
      else if (moveAreas[3].textContent == 'O' && moveAreas[5].textContent == 'O') {
          return true
      }
  }
}

function clearBoard() {
  for (let i = 0; i < moveAreas.length; i+=1) {
    moveAreas[i].textContent = ''
    moveAreas[i].classList.remove('occupied')
  }
  gameOver = false
}

resetBtn.addEventListener('click', clearBoard)
