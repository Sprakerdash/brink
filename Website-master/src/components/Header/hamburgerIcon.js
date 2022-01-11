import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import gsap from "gsap"

const Icon = styled.div`
  /* position: absolute;
  top: 50%;
  left: 5%; */
  cursor: pointer;

  font-size: 15px;
  height: 1em;
  width: 2em;

  z-index: 1000;
  transform: translate(0, -50%);

  pointer-events: auto;

  /* @media only screen and (min-width: 568px) {
    opacity: 0;
    pointer-events: none;
  } */
`
const Bar = styled.div`
  height: 0.2em;
  width: 100%;
  background: #fff;
  position: absolute;
  transition: 0.3s ease;
  :first-child {
    top: 0px;
    left: 0;
    transform: ${({ open }) =>
      open ? `translate(0, 0.5em) rotate(45deg)` : "none"};
  }
  :nth-child(2) {
    top: 50%;
    left: 0;
    opacity: ${({ open }) => (open ? `0` : "1")};
  }
  :last-child {
    top: 100%;
    left: 0;
    transform: ${({ open }) =>
      open ? `translate(0, -0.5em) rotate(-45deg)` : "none"};
  }
`
const HamburgerIcon = ({ open, setOpen }) => {
  const BarRef = useRef()
  const BarRef1 = useRef()
  useEffect(() => {
    return () => {}
  }, [open])
  return (
    <Icon onClick={() => setOpen(state => !state)}>
      <Bar open={open} ref={BarRef} />
      <Bar open={open} ref={BarRef1} />
      <Bar open={open} />
    </Icon>
  )
}
export default HamburgerIcon
