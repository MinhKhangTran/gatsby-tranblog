import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Newsletter = () => {
  return (
    <Layout>
      <SEO title="Newsletter" />
      <div
        className="flex flex-col justify-center items-center"
        style={{ minHeight: "calc(100vh - 199px)" }}
      >
        <h1 className="text-lime-500 md:text-2xl text-lg tracking-wide text-center">
          Feel Free to Subscribe. I post every few weeks some new stuffs
        </h1>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/success"
          className="font-sans text-sm rounded  w-full max-w-md mx-auto my-8 px-8 pt-6 pb-8"
        >
          <div className="relative border rounded mb-4 shadow appearance-none label-floating">
            <input
              className="w-full py-2 px-3 text-gray-700 leading-normal rounded"
              id="name"
              type="text"
              placeholder="Name"
              name="name"
            />
          </div>
          <div className="relative border rounded mb-4 shadow appearance-none label-floating">
            <input
              className="w-full py-2 px-3 text-gray-700 leading-normal rounded"
              id="email"
              type="email"
              placeholder="Email"
              name="email"
            />
          </div>
          <input type="hidden" name="form-name" value="contact"></input>
          <div className="flex items-center justify-between">
            <button
              className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-md"
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Newsletter
