import React from "react"
import Layout from "../components/Layout"

const Newsletter = () => {
  return (
    <Layout>
      <div
        className="flex flex-col justify-center items-center"
        style={{ minHeight: "calc(100vh - 199px)" }}
      >
        <h1 className="text-lime-500 md:text-2xl text-lg tracking-wide">
          Feel Free to Subscribe. I post every few weeks some new stuffs
        </h1>
        <form class="font-sans text-sm rounded  w-full max-w-md mx-auto my-8 px-8 pt-6 pb-8">
          <div class="relative border rounded mb-4 shadow appearance-none label-floating">
            <input
              class="w-full py-2 px-3 text-gray-700 leading-normal rounded"
              id="name"
              type="text"
              placeholder="Name"
            />
          </div>
          <div class="relative border rounded mb-4 shadow appearance-none label-floating">
            <input
              class="w-full py-2 px-3 text-gray-700 leading-normal rounded"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-md"
              type="button"
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
