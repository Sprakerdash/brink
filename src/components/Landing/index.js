import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import Slide1 from "./Slide1"
import Slide2 from "./Slide2"
import Slide3 from "./Slide3"
import Map from "./Map"
import Socials from "../Socials"
import Background from './Background'


const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  /* cursor: none; */
`
const SlideContainer = styled.div`
  height: 100vh;
`
const Cursor = styled.div`
  position: fixed;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  height: 50px;
  width: 50px;
  z-index: 1;
  transform: translate(-50%, -50%);
  cursor: none;
`
const Arrow = styled.svg`
  position: absolute;
  opacity: 1;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: ${({ show }) => (show ? 1 : 0)};
`
const ArrowContainer = styled.div`
  position: absolute;
  top: 50%;
  left: ${({ left }) => (left ? `0%` : `100%`)};
  transform: translate(-50%, -50%);
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.blue};
  border: 2px solid currentColor;
  width: 15%;
  padding-top: 15%;
  z-index: 1;
  cursor: pointer;
  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background: #30698ea1;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  :hover {
    :after {
      opacity: 1;
    }
  }
`
const Arrows = styled.svg`
 position: absolute;
  top: 50%;
  left: ${({left})=>left?`70%`:`30%`};
  transform: translate(-50%, -50%);
  width: 2em;

${({ theme }) => theme.sizes.sm}{
  width: 2.5em;
}
${({ theme }) => theme.sizes.md}{
  width: 3em;
}
`
function Index() {
  const particlesInit = main => {
    console.log(main)

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }

  const particlesLoaded = container => {
    console.log(container)
  }
  const [slideNumber, setSlideNumber] = useState(0)
  const [leftHover, setLeftHover] = useState(false)
  const [cursorPos, setCursorPos] = useState({ top: 0, left: 0 })

  const SlideContainerRef = useRef()

  const RightArrowRef = useRef()
  const LeftArrowRef = useRef()
  useEffect(() => {
    const SlideContainer = SlideContainerRef.current
    const LeftArrow = LeftArrowRef.current
    const RightArrow = RightArrowRef.current
    const Slides = Array.from(SlideContainer.children)

    // Slides.forEach(
    //   Slide => (Slide.style.opacity = 0)
    // )

    const handleLeftClick = () => {
      setSlideNumber(state => {
        const nextSlideNumber =
          state === 0
            ? Slides.length - 1
            : Math.abs((state - 1) % Slides.length)
        Slides.forEach((Slide, index) => {
          if(index === nextSlideNumber){
            Slide.style.opacity = 1
            Slide.style.pointerEvents = `auto`
          }
          else{
            Slide.style.opacity = 0
            Slide.style.pointerEvents = `none`
          }
        })
        return nextSlideNumber
      })
    }
    const handleRightClick = () => {
      setSlideNumber(state => {
        const nextSlideNumber = (state + 1) % Slides.length
        Slides.forEach((Slide, index) => {
          if(index === nextSlideNumber){
            Slide.style.opacity = 1
            Slide.style.pointerEvents = `auto`
          }
          else{
            Slide.style.opacity = 0
            Slide.style.pointerEvents = `none`
          }
        })
        return nextSlideNumber
      })
    }
    // SlideContainer.addEventListener("click", handleClick)
    LeftArrow.addEventListener("click", handleLeftClick)
    RightArrow.addEventListener("click", handleRightClick)
    return () => {
      // SlideContainer.removeEventListener("click", handleClick)
      LeftArrow.removeEventListener("click", handleLeftClick)
      RightArrow.removeEventListener("click", handleRightClick)
    }
  }, [setSlideNumber])

  // useEffect(() => {
  //   const handleMouseMove = e => {
  //     if (window.innerWidth / 2 - e.clientX < 0 && !leftHover) {
  //       setLeftHover(true)
  //     } else if (window.innerWidth / 2 - e.clientX > 0 && leftHover) {
  //       setLeftHover(false)
  //     }
  //     setCursorPos({
  //       top: e.clientY,
  //       left: e.clientX,
  //     })
  //     // console.log(window.innerWidth / 2 - e.clientX < 0 ? "Right" : "Left")
  //   }
  //   SlideContainerRef.current.addEventListener("mousemove", handleMouseMove)
  //   return () => {
  //     SlideContainerRef.current.removeEventListener(
  //       "mousemove",
  //       handleMouseMove
  //     )
  //   }
  // }, [leftHover])
  // console.log(cursorPos)
  return (
    <>
      {/* <Cursor top={cursorPos.top} left={cursorPos.left}>
        {leftHover ? (
          <Arrow
            show={true}
            viewBox="0 0 425 425"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M304.94 304.94C329.554 280.326 343.382 246.942 343.382 212.132C343.382 177.322 329.554 143.939 304.94 119.324C280.325 94.7102 246.941 80.8821 212.132 80.8821C177.322 80.8821 143.938 94.7102 119.324 119.324C94.7099 143.939 80.8818 177.322 80.8818 212.132C80.8818 246.942 94.7099 280.326 119.324 304.94C143.938 329.554 177.322 343.382 212.132 343.382C246.941 343.382 280.325 329.554 304.94 304.94V304.94ZM106.066 106.066C134.196 77.9357 172.349 62.1321 212.132 62.1321C251.914 62.1321 290.067 77.9357 318.198 106.066C346.328 134.197 362.132 172.35 362.132 212.132C362.132 251.915 346.328 290.068 318.198 318.198C290.067 346.329 251.914 362.132 212.132 362.132C172.349 362.132 134.196 346.329 106.066 318.198C77.9354 290.068 62.1318 251.915 62.1318 212.132C62.1318 172.35 77.9354 134.197 106.066 106.066V106.066ZM146.503 222.182C144.016 222.18 141.631 221.19 139.873 219.43C138.115 217.669 137.128 215.283 137.13 212.795C137.132 210.307 138.122 207.922 139.882 206.164C141.642 204.406 144.029 203.42 146.517 203.421L255.128 203.421L218.429 166.723C216.671 164.964 215.684 162.58 215.684 160.093C215.684 157.607 216.671 155.223 218.429 153.464C220.188 151.706 222.572 150.718 225.059 150.718C227.545 150.718 229.93 151.706 231.688 153.464L284.389 206.166C286.147 207.924 287.135 210.309 287.135 212.795C287.135 215.281 286.147 217.666 284.389 219.424L231.688 272.126C229.93 273.884 227.545 274.872 225.059 274.872C222.572 274.872 220.188 273.884 218.43 272.126C216.671 270.368 215.684 267.983 215.684 265.497C215.684 263.01 216.671 260.626 218.43 258.867L255.128 222.169L146.503 222.182V222.182Z"
              fill="black"
            />
          </Arrow>
        ) : (
          <Arrow
            show={true}
            viewBox="0 0 425 425"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M120.192 120.192C95.5781 144.807 81.75 178.191 81.75 213C81.75 247.81 95.5781 281.194 120.192 305.808C144.806 330.422 178.19 344.25 213 344.25C247.81 344.25 281.194 330.422 305.808 305.808C330.422 281.194 344.25 247.81 344.25 213C344.25 178.191 330.422 144.807 305.808 120.192C281.194 95.5783 247.81 81.7502 213 81.7502C178.19 81.7502 144.806 95.5783 120.192 120.192V120.192ZM319.066 319.066C290.936 347.197 252.782 363 213 363C173.218 363 135.064 347.197 106.934 319.066C78.8035 290.936 63 252.783 63 213C63 173.218 78.8035 135.065 106.934 106.934C135.064 78.8037 173.218 63.0002 213 63.0002C252.782 63.0002 290.936 78.8037 319.066 106.934C347.196 135.065 363 173.218 363 213C363 252.783 347.196 290.936 319.066 319.066V319.066ZM278.628 202.95C281.116 202.952 283.501 203.942 285.259 205.703C287.017 207.463 288.004 209.849 288.002 212.337C288 214.825 287.01 217.21 285.25 218.968C283.489 220.726 281.103 221.713 278.615 221.711L170.003 221.711L206.702 258.41C208.46 260.168 209.448 262.552 209.448 265.039C209.448 267.525 208.46 269.91 206.702 271.668C204.944 273.426 202.56 274.414 200.073 274.414C197.587 274.414 195.202 273.426 193.444 271.668L140.743 218.966C138.984 217.208 137.997 214.824 137.997 212.337C137.997 209.851 138.984 207.466 140.743 205.708L193.444 153.007C195.202 151.248 197.587 150.261 200.073 150.261C202.56 150.261 204.944 151.248 206.702 153.007C208.46 154.765 209.448 157.149 209.448 159.636C209.448 162.122 208.46 164.507 206.702 166.265L170.003 202.964L278.628 202.95V202.95Z"
              fill="black"
            />
          </Arrow>
        )}
      </Cursor> */}
      <Container>
        <Socials />
        <Background slideNumber={slideNumber}/>
        <ArrowContainer ref={RightArrowRef}>
          <Arrows
            viewBox="0 0 159 159"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.5033 89.1819C11.0155 89.1801 8.63029 88.1901 6.8724 86.4298C5.11451 84.6694 4.12793 82.2828 4.12969 79.795C4.13144 77.3072 5.1214 74.922 6.88177 73.1642C8.64215 71.4063 11.0287 70.4197 13.5165 70.4214L122.128 70.4214L85.4293 33.7226C83.6711 31.9644 82.6834 29.5799 82.6834 27.0935C82.6834 24.6071 83.6711 22.2225 85.4293 20.4643C87.1874 18.7062 89.572 17.7185 92.0584 17.7185C94.5448 17.7185 96.9294 18.7062 98.6875 20.4643L151.389 73.1659C153.147 74.924 154.135 77.3086 154.135 79.795C154.135 82.2814 153.147 84.666 151.389 86.4241L98.6875 139.126C96.9294 140.884 94.5448 141.872 92.0584 141.872C89.572 141.872 87.1874 140.884 85.4293 139.126C83.6711 137.368 82.6834 134.983 82.6834 132.497C82.6834 130.01 83.6711 127.626 85.4293 125.867L122.128 89.1686L13.5033 89.1819Z"
              fill="currentcolor"
            />
          </Arrows>
          {/* <RightArrow /> */}
        </ArrowContainer>
        <ArrowContainer ref={LeftArrowRef} left>
          <Arrows
          left
            viewBox="0 0 159 159"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M144.628 69.9504C147.116 69.9522 149.501 70.9422 151.259 72.7025C153.017 74.4629 154.003 76.8495 154.002 79.3373C154 81.8251 153.01 84.2103 151.25 85.9682C149.489 87.7261 147.103 88.7127 144.615 88.7109L36.0032 88.7109L72.7021 125.41C74.4602 127.168 75.4479 129.552 75.4479 132.039C75.4479 134.525 74.4602 136.91 72.7021 138.668C70.9439 140.426 68.5593 141.414 66.0729 141.414C63.5865 141.414 61.202 140.426 59.4438 138.668L6.74226 85.9664C4.98411 84.2083 3.99638 81.8237 3.99638 79.3373C3.99638 76.8509 4.98411 74.4663 6.74226 72.7082L59.4438 20.0066C61.202 18.2485 63.5865 17.2608 66.0729 17.2608C68.5593 17.2608 70.9439 18.2485 72.7021 20.0066C74.4602 21.7648 75.4479 24.1494 75.4479 26.6358C75.4479 29.1222 74.4602 31.5067 72.7021 33.2649L36.0032 69.9637L144.628 69.9504Z"
              fill="currentcolor"
            />
          </Arrows>
        </ArrowContainer>
        <SlideContainer ref={SlideContainerRef}>
          <Slide1 />
           {/* <Slide2 /> <Slide3 /> */}
        </SlideContainer>
      </Container>
    </>
  )
}

export default Index
