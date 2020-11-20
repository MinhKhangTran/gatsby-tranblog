import React from "react"
import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import Categories from "./Categories"

const Layout = ({ children }) => {
  const [toggleNav, setToggleNav] = React.useState(false)
  const toggleNavbar = () => {
    setToggleNav(!toggleNav)
  }
  return (
    <>
      <Navbar toggleNavbar={toggleNavbar} />
      <Categories />
      {children}
      <Sidebar toggleNav={toggleNav} toggleNavbar={toggleNavbar} />
      <Footer />
    </>
  )
}

export default Layout
