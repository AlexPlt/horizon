import { Link } from "react-router-dom";

import "../../assets/css/card.css";

const Card = ({ link = "/", imgSrc, title, text }) => {
    return (
        <Link to={link} className="card-container">
            <img src={imgSrc} alt={text} />
            <h3>{title}</h3>
            <p>{text}</p>
        </Link>
    );
}

export default Card;