import React from "react"
import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import Categories from "./Categories"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Categories />
      {children}
      <Sidebar />
      <Footer />
    </>
  )
}

export default Layout
