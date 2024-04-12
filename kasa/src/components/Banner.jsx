function Banner(props) {
  const textElement = <h2 className="banner__text">{props.texte}</h2>
  return (
    <div className="banner">
      <img src={props.src} alt="bannière" />
      {textElement}
    </div>
  )
}

export default Banner
