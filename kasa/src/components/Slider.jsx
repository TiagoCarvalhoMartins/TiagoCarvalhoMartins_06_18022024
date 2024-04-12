import React, { useState } from 'react'
import '../styles/components/Slider.scss'
import chevron from '../assets/fleche-vers-le-haut.svg'

function Slider(props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderLength = props.data.pictures.length

  const goToNextSlide = () => {
    const nextIndex = (currentIndex + 1 + sliderLength) % sliderLength
    setCurrentIndex(nextIndex)
  }

  const goToPreviousSlide = () => {
    const previousIndex = (currentIndex - 1 + sliderLength) % sliderLength
    setCurrentIndex(previousIndex)
  }

  return (
    <div className="pictures">
      {sliderLength > 1 && (
        <img
          src={chevron}
          alt="bouton précédent"
          className="previousButton"
          onClick={goToPreviousSlide}
        />
      )}
      <img
        src={props.data.pictures[currentIndex]}
        alt="photos"
        className="slider"
      />
      {sliderLength > 1 && (
        <img
          src={chevron}
          alt="bouton suivant"
          className="nextButton"
          onClick={goToNextSlide}
        />
      )}
      {sliderLength > 1 && (
        <div className="imageCounter">
          <p>
            {currentIndex + 1}/{props.data.pictures.length}
          </p>
        </div>
      )}
    </div>
  )
}

export default Slider
