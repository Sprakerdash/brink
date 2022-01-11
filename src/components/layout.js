/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"
import { theme, Global } from "../ThemeContext"
import { ThemeProvider } from "styled-components"
import styled from "styled-components"
import "./layout.css"
import Seo from "../components/seo"

const Cursor = styled.div`
  width: 3rem;
  height: 3rem;
  border: 2px solid black;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
`

const Layout = ({
  children,
  title = "Brink",
  lightFooter = false,
  offsetFooter = false,
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const CursorRef = React.useRef(null)
  const CursorContext = React.createContext(null)
  // React.useEffect(() => {
  //   const handleCursor = e => {
  //     // console.log(e.pageX, e.pageY, CursorRef.current)
  //     CursorRef.current.style.transform = `translate3d(${e.pageX - 15}px,${
  //       e.pageY - 15
  //     }px,0)`
  //     // CursorRef.current.style.left= `${e.pageX}px`;
  //   }
  //   window.addEventListener("mousemove", handleCursor)
  //   return () => {
  //     window.removeEventListener("mousemove", handleCursor)
  //   }
  // }, [])
  return (
    <ThemeProvider theme={theme}>
      <Seo title={title} />
      <Global />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      {/* <Nav /> */}
      {/* <div id="cursor" className="cursor" ref={CursorRef} data-text="text" /> */}
      <main style={{ height: `100vh` }}>
        {children}
        <Footer light={lightFooter} offsetTop={offsetFooter} />
      </main>
      {/* <footer
            style={{
              marginTop: `2rem`,
            }}
          >
            © {new Date().getFullYear()}Xenon Pay
            {` `}
          </footer> */}
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
