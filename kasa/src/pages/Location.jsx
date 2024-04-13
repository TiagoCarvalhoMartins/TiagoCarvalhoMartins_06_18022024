import '../styles/Location.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import Tag from '../components/Tag'
import Rate from '../components/Rate'
import Collapse from '../components/Collapse'
import { useParams } from 'react-router-dom'
import JSON from '../data/data.json'
import Error from './Error'

function Location() {
  let params = useParams()
  const JSONFiltered = JSON.find((location) => location.id === params.id)
  console.log(JSONFiltered)

  if (!JSONFiltered) {
    return <Error />
  }

  return (
    <div className="body">
      <Header />
      <main>
        <Slider data={JSONFiltered} />
        <div className="mainInformations">
          <div className="titleLocalisation">
            <h2>{JSONFiltered.title}</h2>
            <p>{JSONFiltered.location}</p>
          </div>
          <div className="seller">
            <p>{JSONFiltered.host.name}</p>
            <img
              src={JSONFiltered.host.picture}
              alt="vendeur"
              className="imageSeller"
            />
          </div>
        </div>
        <div className="tagRating">
          <div className="tags">
            {JSONFiltered.tags.map((tag) => (
              <Tag content={tag} key={tag} />
            ))}
          </div>
          <Rate data={JSONFiltered} />
        </div>
        <div className="toggleButton">
          <div className="containerToggle">
            <Collapse title="Description" texte={JSONFiltered.description} />
          </div>
          <div className="containerToggle">
            <Collapse
              title="Équipements"
              texte={JSONFiltered.equipments.join(', ')}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Location
