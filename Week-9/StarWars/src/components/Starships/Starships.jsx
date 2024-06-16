import { useNavigate } from "react-router-dom";
import "./starships.css";

// eslint-disable-next-line react/prop-types
function Starships({ name, hyperDrive, model}) {
  const navigate = useNavigate();

  return (
    <>
      <div className="ship" onClick={() => navigate("/ship/" + name)}>
        <div className="ship-img">
          <img
            src="https://www.denofgeek.com/wp-content/uploads/2019/02/star-wars-rebels-ghost.png"
            alt="gorsel"
          />
        </div>
        <div className="ship-info">
          <h2>{name}</h2>
          <div className="info-row">
            <span className="title"> Model :</span>
            <span className="value"> {model}</span>
          </div>
          <div className="info-row">
            <span className="title"> Hyperdrivw Rating :</span>
            <span className="value"> {hyperDrive}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Starships;
