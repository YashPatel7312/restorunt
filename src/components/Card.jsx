import "../styles/card.css";

function Card({ title, text, image, className }) {
  return (
    <div className={`card ${className || ""}`}>
      <p className="ct">{text}</p>
      <div className="card-body">
        <img src={image} alt={title} className="card-img" loading="lazy" />
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default Card;
