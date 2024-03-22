import '../../styles/components/location/Rate.scss'

function Rate(props) {
  const rating = parseInt(props.data.rating)
  const fullStars = []
  for (let i = 0; i < rating; i++) {
    fullStars.push(
      <span key={i} className="starFull">
        ★
      </span>
    )
  }

  const emptyStars = []
  for (let i = rating; i < 5; i++) {
    emptyStars.push(
      <span key={i} className="starEmpty">
        ★
      </span>
    )
  }

  return (
    <div className="rating">
      {fullStars}
      {emptyStars}
    </div>
  )
}

export default Rate
