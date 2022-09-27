import "./styles.module.css"

const Card = (props) => {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} className="card__image" />
        <h2 className="card__title"> {props.title}</h2>
        <p className="card__description">{props.description}</p>
        <button className="card__btn">View Recipe</button>
      </div>
    </div>
  )
}

export default Card
