import React from "react"
import styled from "styled-components"
import Section from "../Section"

const Container = styled.div``
const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
`
const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: stretch;
  margin: 4rem 0 0 0;
`
const Card = styled.div`
  max-width: 200px;
  box-shadow: 2px 4px 12px #888787;
  border-radius: 20px;
  padding: 3rem 2rem;
  margin: 1rem;
  background: #fff;
  text-align: center;
  h4 {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.red};
  }
  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text};
  }
`
const Icon = styled.img`
  width: 100%;
`

function Index() {
  return (
    <Section light title="What is Brink?" titleBg="The Brink of innovation">
      {/* <Slant/> */}
      <Container>
        <Text>
          Brink connects the physical world onto the blockchain. It pioneers the
          concept of Property NFTs, pushing the groundbreaking opportunities of
          digital collectible instruments far beyond fun and entertainment.
          <br />
          <br />
          Brink is the main token to the ecosystem - the token is used to
          govern, stake and purchase the properties that we invest in.
        </Text>
      </Container>
      <Cards>
        <Card>
          <Icon src="NewInvest.png" />
          <h4>New way of investing</h4>
          <p>Completely Decentralised Property Investments.</p>
        </Card>
        <Card>
          <Icon src="Security.png" />
          <h4>Investor Security</h4>
          <p>With Brink Treasury and Rising Floor.</p>
        </Card>
        <Card>
          <Icon src="Transparent.png" />
          <h4>Transparent</h4>
          <p>Every transaction is listed on the Blockchain.</p>
        </Card>
      </Cards>
    </Section>
  )
}

export default Index
