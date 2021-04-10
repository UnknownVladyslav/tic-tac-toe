import React from 'react'
import styled from 'styled-components'
import GameField from "./GameField/GameField";

const GameOverWindow = ({player, newGame, draw, ...props}) => {


    return (
        <>
            <StyledGameOverWindow>
                { draw ?
                    <h2>Draw</h2>
                    :
                    <h2>The player {player} has won</h2>
                }
                <StyledButton onClick={() => newGame()}>New game</StyledButton>
            </StyledGameOverWindow>
        </>
    )
}

const StyledGameOverWindow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //border: 3px solid black;
  //border-radius: 25px;
  min-width: 500px;
  min-height: 200px;
  
  h2 {
    margin-bottom: 80px;
  }
`
export const StyledButton = styled.button`
  //max-height: 40px;
  padding: 10px 40px;
  outline: none;
  color: black;
  font-size: 29px;
  font-weight: bold;
  background-color: whitesmoke;
  border: 3px solid black;
  border-radius: 10px;
  cursor: pointer;
  transition: all .4s ease;
  &:hover {
  transform: scale(1.02);
    border-color: #010c84;
  }
`


export default GameOverWindow