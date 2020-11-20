import React from "react"
import { socials, navbar } from "../constants/data"
import { FaBars } from "react-icons/fa"
import { Link } from "gatsby"

const Navbar = ({ toggleNavbar }) => {
  return (
    <nav className="">
      <div className="breite flex items-center justify-between text-xl text-gray-800  tracking-wider p-2">
        <div className="flex items-center justify-between w-full md:w-auto">
          <h1 className="logo text-4xl">TranBlog</h1>
          <button className="md:hidden" onClick={toggleNavbar}>
            <FaBars />
          </button>
        </div>
        <ul className="hidden md:flex space-x-6">
          {navbar.map(link => {
            const { id, text, url } = link
            return (
              <li className="capitalize" key={id}>
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
        </ul>
        <ul className="hidden md:flex space-x-4">
          {socials.map(link => {
            const { id, url, icon } = link
            return (
              <li className="" key={id}>
                <a href={url} target="__blank">
                  {icon}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="bg-gradient-to-r from-lime-200 to-lime-500 h-0.5 w-screen"></div>
    </nav>
  )
}

export default Navbar
