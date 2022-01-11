import React from "react"
import styled from "styled-components"
import { Twitter, Telegram, Medium, Github, Discord, GitBook } from "./styled"

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  z-index: 1;
  margin: 0rem 0 3rem 0;

 

  ${({ theme }) => theme.sizes.sm} {
    position: fixed;
    top: 1.5%;
    left: 50%;
    flex-direction: row;
    padding: 0.8rem 0.5rem;
    /* background: rgba(4, 6, 31, 0.8); */
    transform: translate(-50%, 0%);
    z-index: 10;
  }

  @media only screen and (max-width: 650px) {
    position: absolute;
    top: 23%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

`
const Link = styled.a`
  margin: 0rem 0.5rem;
  ${({ theme }) => theme.sizes.sm} {
    margin: 0.5rem 0.8rem;
  }
`
function Index() {
  return (
    <Container>
      <Link
        target="_blank"
        rel="noreferrer noopener"
        href="https://twitter.com/BrinkBuild"
      >
        <Twitter />
      </Link>
      <Link
        target="_blank"
        rel="noreferrer noopener"
        href="https://t.me/BrinkBuild"
      >
        <Telegram />
      </Link>
      <Link
        target="_blank"
        rel="noreferrer noopener"
        href="http://brinkbuild.medium.com/"
      >
        <Medium />
      </Link>
      <Link
        target="_blank"
        rel="noreferrer noopener"
        href=" https://github.com/BRINKBuild"
      >
        <Github />
      </Link>
      <Link
        target="_blank"
        rel="noreferrer noopener"
        href=" https://discord.gg/G7WebGjd"
      >
        <Discord />
      </Link>
      <Link
        target="_blank"
        rel="noreferrer noopener"
        href="https://gitbook.brink.build/"
      >
        <GitBook />
      </Link>
    </Container>
  )
}

export default Index
