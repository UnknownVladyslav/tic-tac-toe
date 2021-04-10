import React, {useState} from 'react'
import GameField from "./GameField/GameField";
import GameOverWindow, {StyledButton} from "./GameOverWindow";
import styled, {keyframes} from "styled-components";
import './App.scss';


const App = () => {
    const [load, setLoad] = useState(false)
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [currentTurn, setTurn] = useState(0)
    const [gameOver, setGameOver] = useState(false)
    const [draw, setDraw] = useState(false)

    function checkWinCondition() {
        let winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [0, 4, 8],
            [2, 5, 8],
            [2, 4, 6]
        ]

        checkDraw()

        let player = (currentTurn % 2 === 0) ? 'X' : '0'

        for (let i = 0; i < winConditions.length; i++) {
            const line = winConditions[i]
            if (copiedSquares[line[0]] === player
                && copiedSquares[line[1]] === player
                && copiedSquares[line[2]] === player
            ) {
                return setGameOver(true)
            }
        }
        return null
    }

    let copiedSquares = squares.slice()

    function changeTurn(key) {
        setTurn(currentTurn + 1)
        if (currentTurn % 2 === 1) {
            copiedSquares[key - 1] = '0'
            setSquares(copiedSquares)
            checkWinCondition()
            return 'O'
        } else {
            copiedSquares[key - 1] = 'X'
            setSquares(copiedSquares)
            checkWinCondition()
            return 'X'
        }

    }

    function startNewGame() {
        setSquares(Array(9).fill(null))
        copiedSquares.fill(null)
        setGameOver(false)
        setTurn(0)
        setDraw(false)
    }


    function checkDraw() {
        if (copiedSquares.every(x => x != null)) {
            setDraw(true)
        }
    }

    const arisingAnimation = keyframes`
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    `

    const Styledheader = styled.h2`
      animation: ${arisingAnimation} 1.5s forwards;
    `


    return (
        <div className={'appWrapper'}>
            <div className={'gameBlock'}>
                {gameOver || draw ?
                    <GameOverWindow player={(currentTurn % 2 !== 0) ? '1' : '2'} newGame={startNewGame} draw={draw}
                                    copiedSquares={copiedSquares} gameOver={gameOver}/>
                    :
                    load ?
                        <>
                            <Styledheader>The {(currentTurn % 2 === 0) ? 'first' : 'second'} player`s turn</Styledheader>
                            <GameField squares={copiedSquares} changeTurn={changeTurn} gameOver={gameOver}/>
                        </>
                        :
                        <StyledButton onClick={() => setLoad(true)} className={'startButton'}>Start game!</StyledButton>
                }
            </div>
        </div>
    )
}

export default App;
