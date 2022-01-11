import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Hamburger from "./hamburgerIcon"
import TopArrow from "./TopArrow"
import gsap from "gsap"

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${({ theme }) => theme.constant.navHeight};
  z-index: ${({ theme }) => theme.zIndex.nav};

  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    background: rgba(4, 6, 31, 0.8);
    box-shadow: 10px 10px 10px rgba(46, 54, 68, 0.03);
    opacity: ${({ show }) => (show ? 1 : 0.01)};
    transition: opacity 0.1s ease;
    z-index: -1;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  width: 80%;
  height: 100%;

  @media only screen and (min-width: 768px) {
    width: 85%;
  }
`
const ImageContainer = styled.div`
  height: 60px;
  @media only screen and (max-width: 568px) {
    height: 55px;
  }
  flex: 1;
  img {
    object-fit: contain !important;
  }
`

const NavOpenBG = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  opacity: 0;
  pointer-events: none;
  background: rgb(11 8 66 / 88%);
`
const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity:0;
`
const NavLink = styled(Link)`
  font-size: 30px;
  color: #fff;
  margin: 1rem 1rem;
  font-weight: 400;
  white-space: nowrap;

  opacity: 0;
  @media only screen and (max-width: 568px) {
    margin: 1rem;
    font-size: 20px;
  }
  :hover {
    transform: scale(1.15);
  }
`
const Button = styled.a`
  padding: 0.8rem 1.5rem;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  background: #fff;
  box-shadow: 0 0 10px #fff;
  cursor: pointer;
  z-index: 1000;
`
const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "logo.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, height: 70)
        }
      }
    }
  `)
  const [show, setShow] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const tl = gsap.timeline({
    defaults: {
      ease: "power2.inOut",
      duration: 1.5,
    },
  })
  React.useEffect(() => {
    const handleScroll = () => {
      // console.log("scroll", window.scrollY, show)
      if (window.scrollY > 10 && !show) {
        setShow(true)
      } else if (window.scrollY <= 10 && show) {
        setShow(false)
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true })
    }
  }, [show])

  React.useEffect(() => {
    if (open && window.innerWidth) {
      tl.to("#NavBg", {
        opacity: 1,
        pointerEvents:'auto',
        duration: 0.1,
      })
        .to("#NavLinksContainer", {
          opacity: 1,
          pointerEvents:'auto',
          duration: 0.1,
        })
        .to(".staggerLink", {
          opacity: 1,
          y: 0,
          duration: 0.2,
          pointerEvents: "auto",
        })
    } else {
      tl.to(".staggerLink", {
        opacity: 0,
        y: -30,
        pointerEvents: "none",
        duration: 0.3,
      }).to("#NavLinksContainer", {
        opacity: 0,
        pointerEvents:'none',
        duration: 0.2,
      }).to("#NavBg", {
        opacity: 0,
        duration: 0.1,
        pointerEvents:'none',
      },"-=0.1")
    }
  }, [open])
  return (
    <header>
      <Nav show={show}>
        <TopArrow show={show}/>
        <Container>
          <Hamburger open={open} setOpen={setOpen} />
          <Button href="https://forms.gle/n1Bwv2BJH5oB5k1H9">
            Apply for ICO
          </Button>
        </Container>
        <NavOpenBG
          onClick={() => {
            setOpen(false)
          }}
          id="NavBg"
        />
        <NavLinkContainer id="NavLinksContainer">
          <NavLink className="staggerLink" to="/">
            Home
          </NavLink>
          <NavLink className="staggerLink" to="/">
            Whitepaper
          </NavLink>
          <NavLink className="staggerLink" to="/contact">
            Contact
          </NavLink>
          <NavLink className="staggerLink comingSoon" to="/">
            Brink Assests
          </NavLink>
          <NavLink className="staggerLink comingSoon" to="/">
            Brink Finance
          </NavLink>
          <NavLink className="staggerLink comingSoon" to="/">
            Brink Realty
          </NavLink>
          <NavLink className="staggerLink comingSoon" to="/">
            Brink Mortgage
          </NavLink>
        </NavLinkContainer>
      </Nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
