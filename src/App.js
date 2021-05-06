import React, { useEffect } from "react"
import "./App.scss"
import Content from "./Components/Content/Content"

const App = () => {
  useEffect(() => {
    const ReactPixel = require("react-facebook-pixel")
    ReactPixel.default.init("310472617255533")
  }, [])
  return (
    <>
      <Content />
    </>
  )
}

export default App
