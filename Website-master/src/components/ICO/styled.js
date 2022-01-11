import React from "react"
import styled from "styled-components"

export const Title = styled.h3`
  text-align: center;
  color: #fff;
  font-size: 24px;
  margin: 5rem 0;
  position: relative;
  :after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translate(-50%, 0);
    height: 5px;
    width: 2em;
    border-radius: 10px;
    background-color: #fff;
  }

  ${({ theme }) => theme.sizes.md} {
    font-size: 28px;
  }
`

export const Text = styled.p`
  font-size: 1em;
  margin: 0 0 2rem 0;
`
