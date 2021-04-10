import React from 'react'
import styled, {keyframes} from 'styled-components'

const arisingAnimation = keyframes`
  0% { opacity: 0; } 
  100% { opacity: 1; }
`

const StyledSquare = styled.div`
  color: darkslateblue;
  padding: 15px;
  background-color: whitesmoke;
  border: 2px solid #333;
  border-radius: 10px;
  margin: 3px;
  cursor: pointer;
  outline: none;
  width: 20px;
  height: 20px;
  position: relative;
  transition: all .4s ease;
  animation: ${arisingAnimation} 1.5s forwards;
  
 &:hover {
   border-color: blueviolet;
   transform: scale(1.05)
 } 
`

const Symbol = styled.p`
  position: absolute;
  top: 10%;
  right: 25%;
  font-size: 23px;
`

const Square = ({changeTurn, index}) => {
    const [symbol, setSymbol] = React.useState(null)
    const [disabled, setDisabled] = React.useState(false)

    function addSymbol() {
        setSymbol(changeTurn(index))
        setDisabled(true)
    }

    return (
        <>
            <StyledSquare as='button' onClick={addSymbol} disabled={disabled}>
                <Symbol>{symbol}</Symbol>
            </StyledSquare>
        </>
    )
}

export default Square