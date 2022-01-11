import * as React from "react"
import Section from "../components/Section"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout title="404: Not found" lightFooter>
    <Section
      style={{ paddingTop: "10rem" }}
      title="Not Found"
      titleBg="404 404 404 404 404 404 404"
    >
      <p>You just hit a route that doesn&#39;t exist.</p>
    </Section>
  </Layout>
)

export default NotFoundPage
