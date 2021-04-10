import React from 'react'
import Square from "../Square/Square";
import './GameField.scss'

const GameField = ({squares, changeTurn, gameOver}) => {
    // debugger
    return (
        <>
            <div className={'gameWrapper'}>
                {squares.map((square, index) => {
                    return <Square
                        key={index + 1}
                        square={square}
                        changeTurn={changeTurn}
                        index={index + 1}
                        gameOver={gameOver}
                    />
                })
                }
            </div>
        </>
    )
}

export default GameField