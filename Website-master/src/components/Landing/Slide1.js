import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { Container as CNT } from "./styled"

const Container = styled(CNT)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

const GlassBox = styled.div`
  text-align: center;
  font-size: 1.8rem;
  p {
    margin-top: 0.5em;
    font-size: 0.5em;
    color: ${({ theme }) => theme.colors.subtle};
    line-height:1.5;
    ${({ theme }) => theme.sizes.md} {
      line-height:1.2;
  }
  }
  ${({ theme }) => theme.sizes.xs} {
    font-size: 2rem;
  }
  ${({ theme }) => theme.sizes.sm} {
    font-size: 3rem;
  }
  ${({ theme }) => theme.sizes.md} {
    font-size: 3.5rem;
  }
  ${({ theme }) => theme.sizes.lg} {
    font-size: 4rem;
  }
`
const Title = styled.h2`
  color: #fff;
  font-size: 1em;
  text-shadow: ${({ theme }) => theme.shadow.title};
  line-height: 1;
  position: relative;
  span {
    font-size: 1.7em;
    text-transform: uppercase;
  }
  margin: 0 0 1rem 0;
  
`

function Slide1() {
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

export default Slide1
