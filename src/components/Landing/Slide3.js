import React from "react"
import styled from "styled-components"
import { Container as CNT } from "./styled"

const Container = styled(CNT)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`
const Text = styled.h2`
  font-size: 32px;
`

function Slide3() {
  return (
    <Container>
      <GlassBox>
        <Title>
          Brinking Blockchain with the <br /> <span>physical world</span>
        </Title>
        <p>
          People and organisations can tokenize and sell their <br /> assets
          thorough Defi, NFT, and DEX solutions. <br />
          Becoming the First to allow investors to buy property with crypto
        </p>
      </GlassBox>
    </Container>
  )
}

export default Slide3
