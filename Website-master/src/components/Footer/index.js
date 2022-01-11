import React from "react"
import Section from "../Section"
import styled from "styled-components"

const Container = styled.footer`
  position: relative;
  p {
    color: ${({ theme, light }) => (light ? theme.colors.text : `#fff`)};
    font-size: 11px;
    text-align: center;
    ${({ theme }) => theme.sizes.sm} {
      font-size: 13px;
    }
    ${({ theme }) => theme.sizes.md} {
      font-size: 14px;
    }
    ${({ theme }) => theme.sizes.lg} {
      font-size: 16px;
    }
  }
`

function Index({ light = false, offsetTop = false }) {
  return (
    <Section light={light} offsetTop={offsetTop}>
      <Container light={light}>
        <p>
          Nothing in this communication should be construed as advice of any
          kind. All investments involve risk of losing all money you invest, and
          past performance does not guarantee future performance.
        </p>
        <p style={{ margin:'3rem 0 0 0' }}>
          © {new Date().getFullYear()} Brink
        </p>
      </Container>
    </Section>
  )
}

export default Index
