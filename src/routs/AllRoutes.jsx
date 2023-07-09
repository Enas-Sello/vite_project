import React from "react"
import { createBrowserRouter } from "react-router-dom"
// import Home from "../pages/Home"
import Root from "./Root"
import Home from "../pages/Home"
import ErrorPAge from "./ErrorPAge"

const Routs = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPAge/>,
      children: [
        {
          index: true,
          element: <Home/>,
        },
      ],
    },
  ])
  export default Routs