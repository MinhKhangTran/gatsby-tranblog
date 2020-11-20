import React from "react"
import Layout from "../components/Layout"
import AboutMe from "../components/AboutMe"
import Articles from "../components/Articles"

export default function Home() {
  return (
    <Layout>
      <AboutMe />
      <Articles />
    </Layout>
  )
}
