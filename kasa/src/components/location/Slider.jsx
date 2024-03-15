import '../../styles/components/location/Slider.scss'

function Slider(props) {
  return (
    <div className="pictures">
      <img src={props.data.pictures[0]} alt="photos" className="slider" />
    </div>
  )
}

export default Slider
