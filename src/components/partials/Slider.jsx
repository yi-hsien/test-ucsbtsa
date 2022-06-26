import React, { useRef } from "react"
import useSlider from "../../hooks/useSlider"

const Slider = ({ images , height}) => {
  const slideImage = useRef(null)
  const slideText = useRef(null)
  const slideTitle = useRef(null)
  const { goToPreviousSlide, goToNextSlide } = useSlider(
    slideImage,
    slideText,
    slideTitle,
    images
  )

  return (
    <div className="slider" ref={slideImage} style={{height: height}}>
      <div className="slider--content" style={{height: height}}>
        <button onClick={goToPreviousSlide} className="slider__btn-left">
          <i className="fas fa-angle-left">
          <span className="arrow-prev">
            <svg className="left-icon" viewBox="0 0 1024 1024">
              <path d="M658 686l-60 60-256-256 256-256 60 60-196 196z"></path>
            </svg>
          </span>
          </i>
        </button>
        <div className="slider--feature">
          <h1 ref={slideTitle} className="feature--title"></h1>
          <p ref={slideText} className="feature--text"></p>
          {/* <button className="feature__btn">Get started</button> */}
        </div>
        <button onClick={goToNextSlide} className="slider__btn-right">
          <i className="fas fa-angle-right">
          <span className="arrow-next">
            <svg className="right-icon" viewBox="0 0 1024 1024">
              <path d="M366 698l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </span>
          </i>
        </button>
      </div>
    </div>
  )
}

export default Slider