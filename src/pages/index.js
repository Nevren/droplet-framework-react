import React from "react"
import Layout from "../components/layout"
import Button from "../components/framework/actions/button"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Test Button</h1>
    <Button
      className="button--purple"
      onClick={() => alert("This demonstrates a button onClick.")}
      >Test Button
    </Button>
  </Layout>
)

export default IndexPage
