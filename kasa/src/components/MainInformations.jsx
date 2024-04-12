import '../styles/components/MainInformations.scss'

function MainInformations(props) {
  return (
    <div className="mainInformations">
      <div className="titleLocalisation">
        <h2>{props.data.title}</h2>
        <p>{props.data.location}</p>
      </div>
      <div className="seller">
        <p>{props.data.host.name}</p>
        <img
          src={props.data.host.picture}
          alt="vendeur"
          className="imageSeller"
        />
      </div>
    </div>
  )
}

export default MainInformations
