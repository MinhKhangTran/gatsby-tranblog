import React from "react"
import Layout from "../components/Layout"
import AboutMe from "../components/AboutMe"
import Articles from "../components/Articles"

export default function Home() {
  return (
    <Layout>
      <div className="w-11/12 mx-auto flex flex-wrap md:flex-no-wrap">
        <AboutMe />
        <Articles />
      </div>
    </Layout>
  )
}
