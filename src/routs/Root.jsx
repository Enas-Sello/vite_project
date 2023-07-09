import React from "react"
import { Outlet } from "react-router-dom"
import NaveBar from "../components/NaveBar"
import Footer from "../components/Footer"
import SideBar from "../components/SideBar"

const Root = () => {
    return (
      <div className="grid h-screen grid-cols-view grid-rows-view">
        <nav className="col-start-1 col-end-3 row-start-1 row-end-2 bg-rose-100 ">
          <NaveBar/>
        </nav>
          <SideBar/>
        <main className=" col-start-1 col-end-2 row-start-2 row-end-3 overflow-y-auto p-10 bg-rose-200">
          <Outlet />
        </main>
        {/* <div className="col-start-1 col-end-2 flex items-center justify-center border-t-2 p-4 bg-rose-300"> */}
        <Footer/>
        {/* </div> */}
      </div>
    )
  }
  
  export default Root