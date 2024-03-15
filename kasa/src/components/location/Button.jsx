import React, { useState } from 'react'
import chevron from '../../assets/fleche-vers-le-haut.svg'
import '../../styles/components/location/Button.scss'

function Button(props) {
  const [toggle, setToggle] = useState(false)
  const [active, setActive] = useState(false)
  const [rotate, setRotate] = useState(false)
  const handleClick = () => {
    setToggle(!toggle)
    setRotate(!rotate)
    setActive(!active)
  }
  return (
    <div className="descriptionToggle">
      <button onClick={handleClick}>
        {props.title}
        <img
          src={chevron}
          alt="ouvrir l'élément"
          className={`chevronButton ${rotate ? 'rotate' : ''}`}
        />
      </button>
      <p className={`descriptionText ${active ? 'active' : ''}`}>
        {props.texte}
      </p>
    </div>
  )
}

export default Button
