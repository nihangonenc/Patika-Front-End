import './totalMoney.style.css'
import { useContext } from 'react'
import GenaralContext from '../../context/GeneralContext'


function TotalMoney() {

  const {totalMoney} = useContext(GenaralContext);
  
  return (
    <div className="total-money">
        <p>${totalMoney}</p>
    </div>
    
  )
}

export default TotalMoney