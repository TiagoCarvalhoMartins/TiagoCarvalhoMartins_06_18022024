import '../styles/components/Card.scss'
import { Link } from 'react-router-dom'

function Card(props) {
  return (
    <div className="card">
      <Link to={`/location/${props.id}`}>
        <img src={props.cover} alt="Aperçu" className="cover" />
        <h2 className="title">{props.title}</h2>
      </Link>
    </div>
  )
}

export default Card
