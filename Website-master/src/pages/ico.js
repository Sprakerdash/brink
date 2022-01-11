import React from "react"
import styled, { ThemeContext } from "styled-components"
import Section from "../components/Section"
import Layout from "../components/layout"
import TokenInfo from "../components/ICO/TokenInfo"
import ProgressBar from "../components/ICO/ProgressBar"
import BuyTokens from "../components/ICO/BuyTokens"
import SaleContract from "../components/ICO/SaleContract"

const Container = styled.div`
  font-size: 16px;
`

function funds() {
  return (
    <Layout lightFooter>
      <Section
        style={{ paddingTop: "10rem" }}
        title="PRE-ICO Sale"
        titleBg="sale sale sale sale sale sale sale"
      >
        <Container>
          <TokenInfo />
          <ProgressBar />
          <BuyTokens />
          <SaleContract />
        </Container>
      </Section>
    </Layout>
  )
}

export default funds
