import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./shipDetails.css";
function ShipDetails() {
  const { name } = useParams();
  const [ship, setShip] = useState(null);

  useEffect(() => {
    fetch("https://swapi.dev/api/starships/")
      .then((response) => response.json())
      .then((data) => {
        const foundShip = data.results.find((ship) => ship.name === name);
        setShip(foundShip);
      });
  }, [name]);

  if (!ship) {
    return <div>Loading...</div>;
  }

  return (
    <div className="single-ship">
      <div className="ship-detail">
        <div className="ship-name">
          <p className="name">{ship.name}</p>
        </div>
        <div className="ship-img">
          <img
            src="https://www.denofgeek.com/wp-content/uploads/2019/02/star-wars-rebels-ghost.png"
            alt=""
          />
        </div>
        <div className="ship-details">
          <div className="ship-detail-info">
            <span className="title">Model : </span>
            <span className="value">{ship.model}</span>
          </div>
          <div className="ship-detail-info">
            <span className="title">Hyperdrive Rating : </span>
            <span className="value">{ship.hyperdrive_rating}</span>
          </div>
          <div className="ship-detail-info">
            <span className="title">Passengers : </span>
            <span className="value">{ship.passengers}</span>
          </div>
          <div className="ship-detail-info">
            <span className="title">Max Atmosphering Speed : </span>
            <span className="value">{ship.max_atmosphering_speed}</span>
          </div>
          <div className="ship-detail-info">
            <span className="title">Manufacturer : </span>
            <span className="value">{ship.manufacturer}</span>
          </div>
          <div className="ship-detail-info">
            <span className="title">Crew : </span>
            <span className="value">{ship.crew}</span>
          </div>
          <div className="ship-detail-info">
            <span className="title">Cargo Capacity : </span>
            <span className="value">{ship.cargo_capacity}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShipDetails;
