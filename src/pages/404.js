import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Link } from "gatsby"

const Error = () => {
  return (
    <Layout>
      <SEO title="Error" />
      <div
        className="flex flex-col justify-center items-center"
        style={{ minHeight: "calc(100vh - 199px)" }}
      >
        <h1 className="text-lime-600 text-xl">Hier gibt es nichts ...</h1>
        <Link
          className="my-2 text-gray-500 inline-block tracking-wider hover:text-gray-700 capitalize text-xl"
          to="/"
        >
          Zurück zur homepage
        </Link>
      </div>
    </Layout>
  )
}

export default Error
