import '../../styles/components/location/Tag.scss'

function Tag(props) {
  return (
    <div className="tag">
      <p className="tag-content">{props.content}</p>
    </div>
  )
}

export default Tag
