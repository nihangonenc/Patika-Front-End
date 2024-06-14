import GenaralContext from "../../context/GeneralContext";
import './list.style.css'
import { useContext } from "react";

function ListInfo() {
  const { lastElements,totalCost } = useContext(GenaralContext);

  return (
    <div className="li-items">
      {lastElements.map((item) => {
        if (item.count > 0) {
          return (
            <li className="li-item" key={item.id}>
              <span className="li-item-name">{item.itemName}</span> <span className="li-price-info">{item.itemCost} x {item.count}</span> <span className="li-item-total">{item.itemCost * item.count}</span>
            </li>
          );
        }
      })}
      <p className="list-total-cost">Total : {totalCost}</p>
    </div>
  );
}

export default ListInfo;
