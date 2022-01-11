import React, { useEffect, useRef } from "react"
import config from "./config"
import styled, { keyframes } from "styled-components"

const animation = keyframes`
    from{
          background: radial-gradient(circle, #02498b, #0b0842);

    }
    to{
        background: radial-gradient(circle, #79b1e7, #0b0842);
    }
`
const Canvas = styled.canvas`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  /* background: radial-gradient(circle, #02498b, #0b0842); */
  background: ${({ color }) => color};
  transition: background 1s ease;
  z-index: -1;
  /* animation: ${animation} 5s linear infinite; */
`
const BackgroundColor = styled.div`
  background: ${({ color }) => color};
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.3s ease;
`
let canvas
let ctx
let particleArray
let BgColors
//Constructor function
class Particle {
  constructor(x, y, directionX, directionY, size, color) {
    this.x = x
    this.y = y
    this.directionX = directionX
    this.directionY = directionY
    this.size = size
    this.color = color
  }
  draw() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
    ctx.fillStyle = this.color
    ctx.fill()
  }
  updateColor(updatedColor) {
    this.color = updatedColor
  }
  update() {
    //Check if particle moves to either edges
    if (this.x + this.size > canvas.width || this.x - this.size < 0) {
      this.directionX *= -1
    }
    if (this.y + this.size > canvas.height || this.y - this.size < 0) {
      this.directionY *= -1
    }
    this.x += this.directionX
    this.y += this.directionY
  }
}

function init(slideNumber) {
  particleArray = []
  for (let i = 0; i < 100; i++) {
    let size = Math.random() * 15
    let x = Math.random() * (window.innerWidth - size * 2)
    let y = Math.random() * (window.innerHeight - size * 2)
    let directionX = Math.random() * 0.4 - 0.2
    let directionY = Math.random() * 0.4 - 0.2
    let colors = config[slideNumber||0].colors

    let color = colors[Math.floor(Math.random() * colors.length)]

    particleArray.push(new Particle(x, y, directionX, directionY, size, color))
  }
}

//animation Loop
function animate() {
  requestAnimationFrame(animate)
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    
  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].update()
    particleArray[i].draw()
  }
}

function Background({ slideNumber }) {
  const CanvasRef = useRef()
  useEffect(() => {
    canvas = CanvasRef.current
    console.log("THE CANVAS", canvas)
    ctx = canvas.getContext("2d")
    ctx.canvas.width = window.innerWidth
    ctx.canvas.height = window.innerHeight
    init(slideNumber)
    animate()
  }, [])
  useEffect(() => {
    let newColor = config[slideNumber].colors
    for (let i = 0; i < particleArray.length; i++) {
      particleArray[i].updateColor(
        newColor[Math.floor(Math.random() * newColor.length)]
      )
    }
  }, [slideNumber])
  useEffect(() => {
    function handleResize() {
      ctx.canvas.width = window.innerWidth
      ctx.canvas.height = window.innerHeight
      init()
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  return (
    <>
      <Canvas color={config[slideNumber].bg} ref={CanvasRef} />
      {/* {config.map((item, index) => (
        <BackgroundColor
          show={index === slideNumber}
          color={item.bg}
          key={index}
        />
      ))} */}
    </>
  )
}

export default Background
