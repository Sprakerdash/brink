import React from "react"
import Section from "../Section"
import styled, { keyframes } from "styled-components"

const RotateClockWise = keyframes`
from{
    transform:translate(-50%,-50%) rotate(0deg);
}
to{
    transform:translate(-50%,-50%) rotate(360deg);
}
`
const RotateAntiClockWise = keyframes`
from{
    transform:translate(-50%,-50%) rotate(360deg);
}
to{
    transform:translate(-50%,-50%) rotate(0deg);
}
`
const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  align-items: center;

  ${({ theme }) => theme.sizes.md} {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`
const InfoContainer = styled.div`
  padding: 3rem 0 0 0;
  font-size: 20px;
  width: 100%;

  ${({ theme }) => theme.sizes.md} {
    width: 45%;
    padding: 0 2rem 0 0;
    /* font-size: 20px; */
  }
  ${({ theme }) => theme.sizes.lg} {
    font-size: 24px;
    padding: 0 5rem 0 0;
  }
`
const Title = styled.h3`
  /* color: ${({ theme }) => theme.colors.red}; */
  color: #fff;
  text-shadow: ${({ theme }) => theme.shadow.title};
  margin: 1rem 0 3rem 0;
  font-size: 1em;
  text-align: center;
  ${({ theme }) => theme.sizes.md} {
    text-align: left;
  }
`
const List = styled.ul``
const ListItem = styled.li`
  font-size: 0.7em;
  color: ${({ theme }) => theme.colors.subtle};
  margin: 1rem 0;
  span {
    /* color: ${({ theme }) => theme.colors.red}; */
    color: #fff;
    font-weight: 500;
    font-size: 1.1em;
  }
`
const ImgContainer = styled.div`
  padding-top: 85%;
  width: 85%;
  overflow: hidden;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  :before {
    position: absolute;
    content: "";
    border: 4px solid rgba(151, 175, 213, 0.3);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    bottom: 0;
    right: 0;
    border-top-color: #fff;
    border-right-color: #fff;
    /* border-top-color: ${({ theme }) => theme.colors.red};
    border-right-color: ${({ theme }) => theme.colors.red}; */
    height: 95%;
    width: 95%;
    transform: translate(-50%, -50%);
    animation: ${RotateClockWise} 24s linear infinite 0s;
  }

  :after {
    position: absolute;
    content: "";
    border: 4px solid rgba(151, 175, 213, 0.3);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    border-top-color: #fff;
    border-bottom-color: #fff;
    /* border-top-color: ${({ theme }) => theme.colors.red};
    border-bottom-color: ${({ theme }) => theme.colors.red}; */
    height: 80%;
    width: 80%;
    animation: ${RotateAntiClockWise} 10s linear infinite 0s;
  }

  ${({ theme }) => theme.sizes.sm} {
    padding-top: 70%;
    width: 70%;
  }
  ${({ theme }) => theme.sizes.md} {
    padding-top: 50%;
    width: 50%;
  }
  ${({ theme }) => theme.sizes.lg} {
    width: 470px;
    padding-top: 470px;
  }
`
const PropertyChain = styled.img`
  position: absolute;
  top: 50%;
  left: 48%;
  transform: translate(-50%, -50%);
  width: 65%;
`

function Index() {
  return (
    <Section
      offsetTop
      style={{
        clipPath: `polygon(0% 12%, 100% 0px, 100% 88%, 0% 100%)
    `,
        paddingBottom: `25rem`,
        paddingTop: `23rem`,
        zIndex: -1,
      }}
      title="Why Brink?"
      titleBg="why choose us?"
    >
      <Container>
        <InfoContainer>
          <Title>
            Brink stands apart by offering attractive features to investors.
          </Title>
          <List>
            <ListItem>
              <span>Traditional with modern: </span> Amongst the first to brink
              into a new way to buy and sell property - Bringing physical assets
              onto the blockchain
            </ListItem>
            <ListItem>
              <span>Access to smaller investors: </span>
              Brink makes properties available to buy with small amounts of
              money
            </ListItem>
            <ListItem>
              <span>Treasury: </span>
              We have a treasury for every seperate project that has a built in
              rising floor for the token price.
            </ListItem>
          </List>
        </InfoContainer>
        <ImgContainer>
          <PropertyChain src="/PropertyChain.png" />
        </ImgContainer>
      </Container>
    </Section>
  )
}

export default Index
