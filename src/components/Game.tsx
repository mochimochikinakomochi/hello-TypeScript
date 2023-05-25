import { useState } from 'react'
import { Board } from "./Board"

export const Game = () => {
    const [squares, setSquares] = useState(["cyan", "lime"])
    const [number, setNumber] = useState(0)
    const isAblePos = ["false", "true"]
    const handleClick = (clickedPosition: number) => {
        const nextSquares = [...squares]
        nextSquares[clickedPosition] = number % 2 ? "cyan" : "lime"
        setSquares(nextSquares)
        setNumber((number) => number + 1)
    }
    return (
        <>
            <Board squares={squares} legalSquares={isAblePos} handleClick={handleClick} />
        </>
    )
}