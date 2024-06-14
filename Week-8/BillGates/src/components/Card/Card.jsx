import "./card.style.css";
import { data } from "../../data";
// eslint-disable-next-line no-unused-vars
import { useState, useContext, useEffect } from "react";
import CardInput from "./CardInput";

function Card() {

  
  return (
    <div className="items">
      {data.map((item) => {
        return (
          <div key={item.id} className="card">
            <img src={item.img} alt={item.itemName} />
            <div className="item-name">{item.itemName}</div>
            <div className="item-cost">${item.itemCost}</div>
            <div className="item-control">
              <CardInput  data = {data} itemCost = {item.itemCost} itemName = {item.itemName}/>
            </div>
          </div>
        );
      }
      )}
    </div>
  );
}

export default Card;
