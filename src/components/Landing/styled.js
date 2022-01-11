import React from "react"
import styled from "styled-components"

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transition: opacity 0.3s ease;
  opacity: 0;
  :first-child {
    opacity: 1;
  }
  padding: 0 11%;
  background: transparent;
  /* z-index: 3; */
  /* width:85%; */
`
