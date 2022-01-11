import React from "react"
import styled from "styled-components"
import { Title } from "./styled"

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
`
const Button = styled.button`
  width: 50%;
  padding: 1rem;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 10px #fff;
  margin: 0 1rem;
`

const Text = styled.p`
  font-size: 1em;
  margin: 0 0 2rem 0;
`
function TokenInfo() {
  return (
    <>
      <Title>Token Info</Title>
      <Text>0xD23E0B754d8A2067D4fe831C32ae41359f2B7f45</Text>
      <Text>Do not send BNB to the token contract</Text>
      <Buttons>
        <Button>Add to MetaMask</Button>
        <Button>Copy</Button>
      </Buttons>
    </>
  )
}

export default TokenInfo
