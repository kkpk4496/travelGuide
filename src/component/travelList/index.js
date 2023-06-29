import './index.css'

const travelList = props => {
  const {travelDetails} = props
  const {name, imageUrl, description} = travelDetails

  return (
    <li className="list">
      <img src={imageUrl} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
    </li>
  )
}

export default travelList
