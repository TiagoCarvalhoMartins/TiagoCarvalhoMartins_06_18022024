import Header from '../components/Header'
import banner from '../assets/banner.png'
import Card from '../components/Card'
import Footer from '../components/Footer'
import '../styles/index.scss'
import JSON from '../data/data.json'

function Home() {
  console.log(JSON)

  return (
    <div className="body">
      <Header />
      <div className="banner">
        <img src={banner} alt="bannière" />
        <h2 className="banner__text">Chez vous, partout et ailleurs</h2>
      </div>
      <div className="container_card">
        {JSON.map((location) => (
          <Card
            title={location.title}
            cover={location.cover}
            id={location.id}
            key={location.id}
          />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Home
