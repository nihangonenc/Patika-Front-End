/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const GenaralContext = createContext();

export default GenaralContext;

export function GeneralProvider({ children }) {
  const [totalMoney, setTotalMoney] = useState(10000000000);
  const [list, setList] = useState([]);
  
  const lastItems = {};
  
  for (const product of list) {
    lastItems[product.itemName] = product;
  }
  
  const lastElements = Object.values(lastItems);
  
  console.log(lastElements);
  
  let totalCost= 0

  lastElements.forEach((item) => {
    totalCost += (item.itemCost *item.count)
  })

  console.log(totalCost);
  
  
  const data = {
    totalMoney,
    setTotalMoney,
    list,
    setList,
    lastElements,
    totalCost
  };
 
  return (
    <GenaralContext.Provider value={data}>{children}</GenaralContext.Provider>
  );
}
