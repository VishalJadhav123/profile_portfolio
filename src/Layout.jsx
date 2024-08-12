import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"

function Layout(){
  return<>
  <Header></Header>
  <Outlet></Outlet>
  <Footer></Footer>
  </>
}

export default Layout