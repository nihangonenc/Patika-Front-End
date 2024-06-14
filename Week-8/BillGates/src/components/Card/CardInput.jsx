import { useContext, useState } from "react";
import "./card.style.css";
import GenaralContext from "../../context/GeneralContext";
// import { data } from "../../data";

// eslint-disable-next-line react/prop-types
function CardInput({itemCost, itemName}) {
  // eslint-disable-next-line no-unused-vars
  const {totalMoney, setTotalMoney, list, setList} = useContext(GenaralContext);
  const [count, setCount] = useState(0)
  
  
  const handleChange =  (e) => {
    console.log(e.target.name);
  }

 const buy = () => {
   setCount(parseInt(count) + 1)
   setTotalMoney(totalMoney - itemCost)
   setList((prev) => [
    ...prev,{
      id: list.length+1,
      itemName: itemName,
      itemCost: itemCost,
      count: count+1
    }
   ])
  };
  
  const sell = () => {
    setCount(parseInt(count) - 1)
    setTotalMoney(totalMoney + itemCost)
    
    setList((prev) => [
      ...prev,{
        id: list.length+1,
        itemName: itemName,
        itemCost: itemCost,
        count: count-1
      }
     ])
  };
  
  return (
    <>
      <button id={itemName} disabled = {count === 0}  onClick={sell} className="item-sell ">
        Sell
      </button>

      <input
        name={itemName}
        type="number"
        value={count}
        onChange={(e) => handleChange(e)}
        />

      <button id={itemName} disabled = {totalMoney < itemCost} onClick={buy} className="item-buy">
        Buy
      </button>
    </>
  );
}

export default CardInput;
