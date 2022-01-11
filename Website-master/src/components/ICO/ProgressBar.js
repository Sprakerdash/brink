import React from "react"
import styled from "styled-components"
import { Title } from "./styled"

const ProgressBar = styled.div`
  display: flex;
  position: relative;
  background-color: #fff;
  font-size: 16px;

  height: 0.5em;
  width: 100%;
  margin: 8rem 0 16rem 0;
  :after {
    content: "";
    position: absolute;
    top: 50%;
    left: ${({ progress }) => `${progress}%`};
    height: 1em;
    width: 1em;
    border-radius: 50%;
    background-color: #fff;
    border: 0.2em solid ${({ theme }) => theme.colors.blue};
    transform: translate(-50%, -50%);
  }
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ progress }) => `${progress}%`};
    background: ${({ theme }) => theme.colors.blue};
    box-shadow: 0 0 0.5em ${({ theme }) => theme.colors.blue};
  }
  font-size: 11px;

  ${({ theme }) => theme.sizes.sm} {
    font-size: 13px;
  }
  ${({ theme }) => theme.sizes.md} {
    font-size: 14px;
  }
  ${({ theme }) => theme.sizes.lg} {
    font-size: 16px;
  }
`
const MileStone = styled.p`
  position: absolute;
  top: 1.2em;
  left: ${({ progress }) => `${progress}%`};
  transform: translate(-50%, 0);
  font-size: 1em;

  :after {
    content: "";
    position: absolute;
    top: -30px;
    left: 50%;
    height: 2.5em;
    width: 0.2em;
    background-color: #5aa5c6;

    ${({ theme }) => theme.sizes.md} {
      top: -42px;
    }
  }
`
const Targets = styled.div`
  position: absolute;
  top: -40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  ${({ theme }) => theme.sizes.md} {
    top: -45px;
  }
`

const Text = styled.p`
  font-size: 1em;
`

function Index() {
  return (
      <>
      <Title>Sale Status</Title>
    <ProgressBar progress="10">
      <Targets>
        <Text>Sold: 1,000 BRK</Text>
        <Text>Remaining: 10,000 BRK</Text>
      </Targets>
      <MileStone progress="30">Milestone 1</MileStone>
      <MileStone progress="50">Milestone 2</MileStone>
      <MileStone progress="80">Milestone 3</MileStone>
    </ProgressBar>
    </>
  )
}

export default Index
