import React, { useState } from 'react'
import chevron from '../assets/fleche-vers-le-haut.svg'
import '../styles/components/Button.scss'

function Button(props) {
  const [toggle, setToggle] = useState(false)
  const [active, setActive] = useState(false)
  const [rotate, setRotate] = useState(false)
  const handleClick = () => {
    setToggle(!toggle)
    setRotate(!rotate)
    setActive(!active)
  }

  const textElement = <div className="descriptionElement">{props.texte}</div>

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
      <div className={`descriptionText ${active ? 'active' : ''}`}>
        {textElement}
      </div>
    </div>
  )
}

export default Button
