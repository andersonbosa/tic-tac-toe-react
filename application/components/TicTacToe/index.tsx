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


const Board = () => {
  const ARRAY_SIZE = 9
  const [squares, setSquares] = useState(Array(ARRAY_SIZE).fill(null))

  const [xIsNext, setXisNext] = useState(false)

  function handlePlayerClick (i: number) {
    const nextSquares = squares.slice()

    nextSquares[i] = Boolean(xIsNext) ? "X" : "O"

    setSquares(nextSquares)
    setXisNext(!xIsNext)

    console.log(nextSquares)
  }

  return (
    <>
      <div className='board-row'></div>
      <Square value={squares[0]} onSquareClick={() => handlePlayerClick(0)} />
      <Square value={squares[1]} onSquareClick={() => handlePlayerClick(1)} />
      <Square value={squares[2]} onSquareClick={() => handlePlayerClick(2)} />
      <div className='board-row'></div>
      <Square value={squares[3]} onSquareClick={() => handlePlayerClick(3)} />
      <Square value={squares[4]} onSquareClick={() => handlePlayerClick(4)} />
      <Square value={squares[5]} onSquareClick={() => handlePlayerClick(5)} />
      <div className='board-row'></div>
      <Square value={squares[6]} onSquareClick={() => handlePlayerClick(6)} />
      <Square value={squares[7]} onSquareClick={() => handlePlayerClick(7)} />
      <Square value={squares[8]} onSquareClick={() => handlePlayerClick(8)} />
    </>
  )
}

const TicTacToe = () => {

  return (
    <>
      <Board />
    </>
  )
}


export default TicTacToe