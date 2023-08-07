'use client'

import { Dispatch, SetStateAction, useState } from 'react'

interface SquareProps {
  value: number
}

const Square: React.FC<SquareProps> = ({ value }) => {
  // const [value, setValue] = useState(null)
  // function onSquareClick () {
  // setValue('X')
  // }

  return (
    < >
      <button className='square' >{value}</button>
    </>
  )
}


const Board = () => {
  const ARRAY_SIZE = 9

  const [squares, setSquares] = useState(
    Array(ARRAY_SIZE).fill(null)
  )

  return (
    <>
      <div className='board-row'></div>
      <Square value={squares[0]} />
      <Square value={squares[1]} />
      <Square value={squares[2]} />
      <div className='board-row'></div>
      <Square value={squares[3]} />
      <Square value={squares[4]} />
      <Square value={squares[5]} />
      <div className='board-row'></div>
      <Square value={squares[6]} />
      <Square value={squares[7]} />
      <Square value={squares[8]} />
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