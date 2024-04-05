import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import banner from '../assets/bannerAbout.png'
import '../styles/About.scss'

function About() {
  return (
    <div className="body">
      <Header />
      <div className="banner">
        <img src={banner} alt="bannière" />
      </div>
      <div className="toggleButton">
        <div className="containerToggle">
          <Button
            title="Fiabilité"
            texte="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          />
        </div>
        <div className="containerToggle">
          <Button
            title="Respect"
            texte="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
        </div>
        <div className="containerToggle">
          <Button
            title="Service"
            texte="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
        </div>
        <div className="containerToggle">
          <Button
            title="Sécurité"
            texte="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien ) l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
