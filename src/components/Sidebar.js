import React from "react"
import { navbar } from "../constants/data"
import { FaTimes } from "react-icons/fa"
import { Link } from "gatsby"

const Sidebar = ({ toggleNavbar, toggleNav }) => {
  return (
    <div className={`sidebar ${toggleNav ? "sidebar-open" : "sidebar-close"}`}>
      <nav className="breite px-2 text-3xl tracking-wider flex flex-col h-screen justify-center">
        {navbar.map(link => {
          const { id, text, url } = link
          return (
            <h1 className="capitalize my-8" key={id}>
              <Link to={url}>{text}</Link>
            </h1>
          )
        })}
      </nav>
      <button
        className="absolute top-0 right-0 p-8 text-lime-600 dark:text-lime-100 font-bold text-6xl animate-pulse"
        onClick={toggleNavbar}
      >
        <FaTimes />
      </button>
    </div>
  )
}

export default Sidebar
