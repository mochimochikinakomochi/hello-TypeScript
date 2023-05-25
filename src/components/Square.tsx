import { FC } from 'react'

type Props = {
    color: string,
    isAblePos: string,
    onSquareClick: () => void
}


export const Square: FC<Props> = ({color, isAblePos, onSquareClick}) => {
    const stoneColor = 	"bg-" + color + "-400 w-10 h-10 text-justify"

    console.log(stoneColor)
    return (
        <td onClick={onSquareClick}>
            <div className={stoneColor}>{color}</div>
            <div className='bg-teal-900 rounded-full w-5 h-5'></div>
        </td>
    )
}