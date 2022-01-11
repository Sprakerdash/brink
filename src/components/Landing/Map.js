import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled, { css, keyframes } from "styled-components"
import { Container as CTN } from "./styled"

const Container = styled(CTN)`
  position: relative;
  padding: calc(${({ theme }) => theme.constant.navHeight} + 4rem) 1rem;

  background: linear-gradient(180deg, #02498b 0%, #0b0842 90.54%);
  background: radial-gradient(circle, #02498b, #0b0842);
  /* height: 100vh; */
  min-height: 500px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  /* clip-path: polygon(0 0, 100% 0, 100% 88%, 0 100%); */
  
`
const PulseAnimation = keyframes`
  from{
    transform: translate(-50%,-50%) scale(1);
    opacity:1;
  }
  to{
    transform: translate(-50%,-50%) scale(4);
    opacity:0;
  }
`
const Pulse = styled.div`
  position: absolute;
  height: 1em;
  width: 1em;
  background: rgb(206, 251, 251);
  background: radial-gradient(
    circle,
    rgba(206, 251, 251, 1) 0%,
    rgba(164, 134, 201, 1) 100%
  );
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: ${PulseAnimation} 2s infinite;

  :nth-of-type(1) {
    top: 22%;
    left: 9%;
  }
  :nth-of-type(2) {
    top: 70%;
    left: 30%;
    animation-delay: 0.2s;
  }
  :nth-of-type(3) {
    top: 10%;
    left: 35%;
    animation-delay: 0.8s;
  }
  :nth-of-type(4) {
    top: 55%;
    left: 50%;
    animation-delay: 0.1s;
  }
  :nth-of-type(5) {
    top: 33%;
    left: 75%;
    animation-delay: 0.5s;
  }
  :nth-of-type(6) {
    top: 80%;
    left: 85%;
    animation-delay: 1s;
  }
`
const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 95vw;
  font-size: 12px;
  ${({ theme }) => theme.sizes.sm} {
    width: 85vw;
  }
  ${({ theme }) => theme.sizes.md} {
    width: 80vw;
    font-size: 24px;
    margin-top: 5%;

  }
  ${({ theme }) => theme.sizes.lg} {
    width: 70vw;
  }
`

const Img = styled.img`
  width: 100%;
`

const GlassBox = styled.div`
  text-align: center;
  font-size: 2rem;
  margin-top: 2rem;
  p {
    margin-top: 0.5em;
    font-size: 0.5em;
    color: ${({ theme }) => theme.colors.subtle};
  }
  ${({ theme }) => theme.sizes.xs} {
    font-size: 2.5rem;
  }
  ${({ theme }) => theme.sizes.sm} {
    font-size: 3rem;
  }
  ${({ theme }) => theme.sizes.md} {
    font-size: 3rem;
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
`
function Landing() {
  return (
    <Container>
      <ImgContainer>
        <Img src="/Map1.png" />
        <Pulse />
        <Pulse />
        <Pulse />
        <Pulse />
        <Pulse />
        <Pulse />
      </ImgContainer>
      <GlassBox>
        <Title>
          Brinking Blockchain with the <br /> <span>physical world</span>
        </Title>
        <p>
          People and organisations can tokenize and sell their <br /> assets
          thorough Defi, NFT, and DEX solutions
        </p>
      </GlassBox>
    </Container>
  )
}

export default Landing
