'use client'

import { Dispatch, SetStateAction, useState } from 'react'

interface SquareProps {
  value: number
  onSquareClick: Dispatch<SetStateAction<any>>
}

const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
  // const [value, setValue] = useState(null)
  // function onSquareClick () {
  // setValue('X')
  // }

  return (
    < >
      <button className='square' onClick={onSquareClick}>{value}</button>
    </>
  )
}

function obterLinhasMatrizQuadrada (matriz) {
  if (!Array.isArray(matriz) || matriz.length === 0 || matriz.some(row => !Array.isArray(row) || row.length !== matriz.length)) {
    throw new Error('A entrada deve ser uma matriz de ordem quadrada.')
  }

  const n = matriz.length
  const linhas = []

  // Adiciona as linhas da matriz
  for (let i = 0; i < n; i++) {
    linhas.push(matriz[i].slice())
  }

  // Adiciona as colunas da matriz
  for (let i = 0; i < n; i++) {
    const coluna = []
    for (let j = 0; j < n; j++) {
      coluna.push(matriz[j][i])
    }
    linhas.push(coluna)
  }

  // Adiciona a diagonal principal
  const diagonalPrincipal = []
  for (let i = 0; i < n; i++) {
    diagonalPrincipal.push(matriz[i][i])
  }
  linhas.push(diagonalPrincipal)

  // Adiciona a diagonal secundária
  const diagonalSecundaria = []
  for (let i = 0; i < n; i++) {
    diagonalSecundaria.push(matriz[i][n - 1 - i])
  }
  linhas.push(diagonalSecundaria)

  return linhas
}


function Board () {
  const [xIsNext, setXIsNext] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null))

  function handleClick (i) {
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    const nextSquares = squares.slice()
    if (xIsNext) {
      nextSquares[i] = 'X'
    } else {
      nextSquares[i] = 'O'
    }
    setSquares(nextSquares)
    setXIsNext(!xIsNext)
  }

  const winner = calculateWinner(squares)
  let status
  if (winner) {
    status = 'Winner: ' + winner
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O')
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  )
}

function calculateWinner (squares: Array<Array<number>>) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}



const TicTacToe = () => {
  return (
    <>
      <Board />
    </>
  )
}


export default TicTacToe