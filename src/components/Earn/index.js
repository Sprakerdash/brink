import React from "react"
import styled from "styled-components"
import Section from "../Section"
import Coins from './Coins'
import House from './House'
import Passive from "./Passive"

const Container = styled.div``
const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  margin: 4rem 0 0 0;
`
const Card = styled.div`
  max-width: 50%;
  border-radius: 20px;
  padding: 2rem 0rem;
  margin: 1rem;
  text-align: center;

  h4 {
    font-size: 16px;
    color:#09598d;
    margin: 1rem 0 2rem 0;
    position: relative;
    :after{
      content:'';
      position:absolute;
      bottom: -45%;
      left:50%;
      transform:translate(-50%,-50%);
      height:5px;
      width:2.5em;
      border-radius: 10px;
      background: ${({theme})=>theme.colors.blue};
    }
    /* color: ${({ theme }) => theme.colors.dblue}; */
  }
  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text};
  }
  ${({theme})=>theme.sizes.md}{
    padding: 3rem 2rem;
  }
`
const Icon = styled.img`
  width: 100%;
`
function Index() {
  return (
    <Section
      offsetTop
      light
      title="How to earn"
      titleBg="Invest, Stake, and Grow"
    >
      <Container>
        <Cards>
          <Card>
            <Coins/>
            <h4>Stake</h4>
            <p>Stake Brink to earn Brink at attractive return rates!</p>
          </Card>
          <Card>
           <House/>
            <h4>Brink Property</h4>
            <p>Invest in properties, developments and future projects using Brink!</p>
          </Card>
          <Card>
           <Passive/>
            <h4>Passive Income</h4>
            <p>Earn passive income though rental and Capital returns!</p>
          </Card>
        </Cards>
      </Container>
    </Section>
  )
}

export default Index
