import { useEffect, useState } from "react";
import Starships from "../Starships/Starships";

function MainPage() {
  //https://swapi.dev/starships

  const [list, setList] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [filter, setFilter] = useState("");
  const [count, setCount] = useState(0);
  const [url, setUrl] = useState("https://swapi.dev/api/starships");

  useEffect(() => {
    fetch(url).then((res) => {
      res.json().then((data) => {
        setOriginalList(data.results);
        setList(data.results);
      });
    });
  }, [url]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleClick = () => {
      setUrl("https://swapi.dev/api/starships/?page=2")
  }

  useEffect(() => {
    const filteredList = originalList.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    setList(filteredList);
  }, [filter, originalList]);

  return (
    <div>
      <div className="search-area">
        <h3>Name / Model : </h3>
        <input value={filter} onChange={handleFilterChange} type="text" />
      </div>
      <div className="ships">
        {list.map((item, index) => {
          return (
            <Starships
              key={index}
              name={item.name}
              model={item.model}
              hyperDrive={item.hyperdrive_rating}
              url={item.url}
              passengers={item.passengers}
            />
          );
        })}
        <div className="show-more">
          <button onClick={handleClick}>Daha Fazla Göster</button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
