//need to create dynamic css rules
//a little fuzzy on the format of the actual data that will be passed into this component

import React, { useState } from 'react'
import SliderBtn from './SliderBtn'

const Slider = (arr) => {

  const [slideIndex, setSlideIndex] = useState(0)

  //function to move to next slide
  const nextSlide = () => {
    if (slideIndex !== arr.length) {
      setSlideIndex(slideIndex + 1)
    }
    else if (slideIndex === arr.length) {
      setSlideIndex(1)
    }
  }

  //function to move to prev slide
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    }
    else if (slideIndex === 1) {
      setSlideIndex(arr.length)
    }
  }

  //function to click dot and move to that slide
  const dotSelect = index => {
    setSlideIndex(index)
  }

  //component
  return (
    //slider
    <div classname="slider-container">
      {arr.map((slide, index) => {
        return (
          //placeholder for img
          //need to set dynamic class rules in css
          <div className={slideIndex === index + 1 ? "slide active" : "slide"}>
            key={slide.id}
            <img src={arr.img} alt="" />
          </div>
        )
      })}
      {/* slider buttons */}
      <SliderBtn moveSlider={nextSlide} direction={"next"} />
      <SliderBtn moveSlider={prevSlide} direction={"prev"} />
      {/* dots at bottom of slider */}
      <div onClick={() => dotSelect(index + 1)}
        className={slideIndex === index + 1 ? "dot active" : "dot"}>
        {Array.from({ length: 5 }).map((item, index) => (
          <div classname="dot"></div>
        ))}
      </div>
    </div>
  )
}

export default Slider
