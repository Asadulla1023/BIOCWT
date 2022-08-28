import { useState } from "react"
import Prev from "./images/Prev.svg"
import Next from "./images/Next.svg"
import Ellipse from "./images/ellipse.png"
import modernHouse from "./images/modernHouse.png"

export const OurWork = () => {
  const [bgValue, setBgValue] = useState("white")

  const bgChangeHandler = () => {
    console.log("uhuh");
  }


  return (
    <div>
      <div className="ourWork">
        <h2>Our work</h2>
        <div className="carousel">
          <div className="image">
            <div className="change__background">
              <button>
                <img src={Prev} alt="Previmage" />
              </button>
            </div>
            <img src={modernHouse} alt="Object" />
            <div className="change__background">
              <button>
                <img src={Next} alt="Nextimage" />
              </button>
            </div>
          </div>
          <div className="ellipse">
            <button>
              <img
                className="st"
                src={Ellipse}
                alt=""
              /></button><button>
              <img
                className="nd"
                src={Ellipse}
                alt="" /></button>
            <button onClick={
              bgChangeHandler
            }>
              <img className="rd" src={Ellipse} alt="" />
            </button>
          </div>
          <div className="image"></div>
          <div className="image"></div>
        </div>
      </div>
    </div>
  )
}
