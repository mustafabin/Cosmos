import React from 'react'

const SliderBtn = (direction, moveSlider) => {
  return (
    <button onClick={moveSlider}
      className={direction === "next" ? "slide-btn next" : "slide-btn prev"}>
      {direction === "next" ? Right : Left}
    </button>
  )
}

export default SliderBtn