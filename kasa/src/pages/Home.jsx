import Header from '../components/Header'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Footer from '../components/Footer'
import bannerImage from '../assets/banner.png'
import '../styles/index.scss'
import JSON from '../data/data.json'

function Home() {
  console.log(JSON)

  return (
    <div className="body">
      <Header />
      <main>
        <Banner src={bannerImage} texte="Chez vous, partout et ailleurs" />
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
      </main>
      <Footer />
    </div>
  )
}

export default Home
