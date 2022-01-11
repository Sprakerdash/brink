import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import Section from "../Section"

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  flex-wrap: wrap;
`
const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  margin: 2rem 1rem;
`
const ImgContainer = styled.div`
  width: 200px;
  
  margin: 0 0 2rem 0;

`
const Text = styled.p`
  color: #fff;
  margin: -3rem 0 5rem 0;
`
function Index() {
  const data = useStaticQuery(graphql`
    query Partners {
      unit: file(relativeDirectory: { eq: "partners" }, name: { eq: "unit" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      ozway: file(relativeDirectory: { eq: "partners" }, name: { eq: "ozway" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      agent: file(relativeDirectory: { eq: "partners" }, name: { eq: "agentops" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)
  const PartnerData = [
    {
      name: "Agent ops",
      img: data.agent.childImageSharp.gatsbyImageData,
      url: "https://www.agentops.com.au/",
    },
    {
      name: "Unit Ventures",
      img: data.unit.childImageSharp.gatsbyImageData,
      url: "https://www.unit.ventures/",
    },
    {
      name: "Ozway Realty",
      img: data.ozway.childImageSharp.gatsbyImageData,
      url: "ozwayrealty.com.au/",
    },
    
  ]
  // console.log("Data", PartnerData)
  return (
    <Section
      style={{
        clipPath: `polygon(0% 0%, 100% 12%, 100% 100%, 0% 88%)
        `,
        paddingBottom: `25rem`,
        paddingTop: `23rem`,
        zIndex: -1,
      }}
      offsetTop
      title="Partners"
      titleBg="Partnerships to brink"
    >
      <Text>
        We are working with leading companies to grow and populate the Brink
        ecosystem.
      </Text>
      <Container>
        {PartnerData.map((data, index) =>
          data.url ? (
           
              <Card key={index}>
                 <a href={data.url} target="_blank" rel="noopener noreferrer">
                <ImgContainer>
                  <GatsbyImage image={data.img} alt="" />
                </ImgContainer>
                {/* <p>{data.name}</p> */}
                </a>
              </Card>
           
          ) : (
            <Card key={index}>
              <ImgContainer>
                <GatsbyImage image={data.img} alt="" />
              </ImgContainer>
              {/* <p>{data.name}</p> */}
            </Card>
          )
        )}
      </Container>
    </Section>
  )
}

export default Index
