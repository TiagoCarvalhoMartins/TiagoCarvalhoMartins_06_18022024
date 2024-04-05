import React, { useState } from 'react'
import '../../styles/components/location/Slider.scss'
import chevron from '../../assets/fleche-vers-le-haut.svg'

function Slider(props) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNextSlide = () => {
    const nextIndex =
      (currentIndex + 1 + props.data.pictures.length) %
      props.data.pictures.length
    setCurrentIndex(nextIndex)
  }

  const goToPreviousSlide = () => {
    const previousIndex =
      (currentIndex - 1 + props.data.pictures.length) %
      props.data.pictures.length
    setCurrentIndex(previousIndex)
  }

  return (
    <div className="pictures">
      <img
        src={chevron}
        alt="bouton précédente"
        className="previousButton"
        onClick={goToPreviousSlide}
      />
      <img
        src={props.data.pictures[currentIndex]}
        alt="photos"
        className="slider"
      />
      <img
        src={chevron}
        alt="bouton suivant"
        className=" nextButton"
        onClick={goToNextSlide}
      />
    </div>
  )
}

export default Slider
