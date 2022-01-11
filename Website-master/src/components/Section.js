import React from "react"
import styled from "styled-components"
import Container from "./Container"

const StyledContainer = styled(Container)`
  background: ${({ theme, light }) =>
    light
      ? `transparent`
      : `linear-gradient(165deg,rgba(2,73,139,1) 0%,rgba(11,8,66,1) 65%)`};
  max-width: 100vw;
  overflow: hidden;
  position: relative;
  top: ${({ offsetTop }) => (offsetTop ? `-20rem` : `0`)};
  /* clip-path: ${({ theme, light }) =>
    light ? `none` : `polygon(0 12%, 100% 0, 100% 88%, 0% 100%)`}; */
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 40px 0;
  ${({ theme }) => theme.sizes.sm} {
    margin: 25px 0 50px 0;
  }
  ${({ theme }) => theme.sizes.lg} {
    margin: 30px 0 85px 0;
  }
`
const Title = styled.h2`
  color: ${({ theme, light }) => (light ? theme.colors.blue : "#fff")};
  /* color: #fff; */
  text-shadow: ${({ theme, light }) => (light ? "none" : theme.shadow.title)};
  position: relative;
  font-weight: 700;
  font-size: 2.4rem;
  ${({ theme }) => theme.sizes.sm} {
    font-size: 3rem;
  }
  ${({ theme }) => theme.sizes.md} {
    font-size: 3.8rem;
  }
  /* ${({ theme }) => theme.sizes.lg} {
    font-size: 4rem;
  } */

  :before {
    position: absolute;
    left: 50%;
    top: 50%;
    content: attr(title);
    font-family: Poppins, serif, sans-serif, georgia;
    line-height: 0.9;
    text-transform: uppercase;
    white-space: nowrap;
    color: rgb(32, 43, 71);
    transform: translate(-50%, -50%);

    font-size: 48px;
    background-image: ${({ theme, light }) =>
      light
        ? `linear-gradient(${theme.colors.blue} 0%, #a486c9 100%)`
        : `linear-gradient(${theme.colors.red} 0%, #a486c9 100%)`};

    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0.1;
    ${({ theme }) => theme.sizes.sm} {
      font-size: 64px;
    }
    ${({ theme }) => theme.sizes.md} {
      font-size: 84px;
    }
    ${({ theme }) => theme.sizes.lg} {
      font-size: 124px;
    }
  }
`
function Section({
  offsetTop = false,
  style,
  light = false,
  title = "",
  titleBg = "",
  children,
}) {
  return (
    <StyledContainer offsetTop={offsetTop} style={{ ...style }} light={light}>
      {title && (
        <TitleContainer>
          <Title light={light} title={titleBg}>
            {title}
          </Title>
        </TitleContainer>
      )}
      {children}
    </StyledContainer>
  )
}

export default Section
