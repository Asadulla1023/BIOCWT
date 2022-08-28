import takingMeasure from "./images/takingMeasure.png"
import motivatedMan from "./images/motivatedMan.png"
import croppedMan from "./images/croppedMan.png"

export const About = () => {
  return (
    <div className="aboutUs">
      <div className="cont">
        <div className="aboutUs__left">
          <h2>About us</h2>
          <p>
            <span>BIO CWT</span> - We manufacture solid wood products
            according to individual drawings. We make chairs, armchairs,
            wardrobes, beds and much more in our own workshop, equipped with
            all the necessary industrial equipment.
          </p>
        </div>
        <div className="aboutUs__right">
          <img src={takingMeasure} alt="topImage" />
          <img className="second__img" src={motivatedMan} alt="motivatedMan" />
          <img src={croppedMan} alt="croppedMan" />
        </div>
      </div>
    </div>
  )
}
