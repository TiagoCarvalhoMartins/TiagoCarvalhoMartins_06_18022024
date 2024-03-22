import '../styles/Location.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Slider from '../components/location/Slider'
import MainInformations from '../components/location/MainInformations'
import Tag from '../components/location/Tag'
import Rate from '../components/location/Rate'
import Button from '../components/location/Button'
import { useParams } from 'react-router-dom'
import JSON from '../data/data.json'

function Location() {
  let params = useParams()
  const JSONFiltered = JSON.find((location) => location.id === params.id)
  console.log(JSONFiltered)

  return (
    <div className="body">
      <Header />
      <div className="container_location">
        <Slider data={JSONFiltered} />
        <MainInformations data={JSONFiltered} />
        <div className="tagRating">
          <div className="tags">
            {JSONFiltered.tags.map((tag) => (
              <Tag content={tag} key={tag} />
            ))}
          </div>
          <div className="rating">
            <Rate data={JSONFiltered} />
          </div>
        </div>
        <div className="toggleButton">
          <div className="containerToggle">
            <Button title="Description" texte={JSONFiltered.description} />
          </div>
          <div className="containerToggle">
            <Button
              title="Équipements"
              texte={JSONFiltered.equipments.join(', ')}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Location
