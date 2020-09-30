import "./Contact.scss"
import React from "react"

const Contact = () => {
  return (
    <div className="map-container">
      <iframe
        title="Tartak Lorki"
        width="720"
        height="400"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=720&amp;height=400&amp;hl=en&amp;q=Tartak%20Lorki+(Tartak%20Lorki)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
      <a href="https://www.maps.ie/route-planner.htm">Plan A Journey</a>
    </div>
  )
}

export default Contact
