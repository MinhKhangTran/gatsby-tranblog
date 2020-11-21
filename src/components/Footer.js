import React from "react"
import { socials } from "../constants/data"

const Footer = () => {
  return (
    <div className="bg-lime-400 flex justify-center items-center p-4">
      <div className="flex flex-col items-center">
        <h1 className="text-lime-50 font-semibold">
          &copy; MKT {new Date().getFullYear()}
        </h1>
        <article className="md:hidden space-x-5 text-3xl mt-4 ">
          {socials.map(social => {
            const { id, icon, url } = social
            return (
              <button className="text-lime-900 hover:text-lime-600" key={id}>
                <a href={url}>{icon}</a>
              </button>
            )
          })}
        </article>
      </div>
    </div>
  )
}

export default Footer
