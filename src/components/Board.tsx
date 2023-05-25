import { Square } from "./Square"
import { FC } from "react"

type Props = {
    squares: Array<string>,
    legalSquares: Array<string>,
    handleClick: (clickedPosition: number) => void, 
}

export const Board: FC<Props> = ({squares, legalSquares, handleClick}) => {
    return (
        <>
            {squares.map((square, index) => {
                return <Square color={square} isAblePos={legalSquares[index]} onSquareClick={() => handleClick(index)} />
            })}
        </>
    )
}