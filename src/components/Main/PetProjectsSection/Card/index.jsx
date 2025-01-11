import "./card.scss";

const Card = ({ img, title, description, href }) => {
  return (
    <a href={`${href}`} target="_blank" className="pet-project__card">
      <img src={img} alt="Пет-проект" />
      <div className="pet-project__card__text">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
        <button className="card__btn">LEARN MORE</button>
      </div>
    </a>
  );
};

export default Card;
