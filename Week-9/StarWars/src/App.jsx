import './App.css'
import {Routes, Route} from 'react-router-dom'
import MainPage from './components/MainPage/MainPage'
import NotFoundPage from './components/NotFoundPage/NotFoundPage'
import ShipDetails from "./components/ShipDetails/ShipDetails"
import Header from './components/Header/Header'

function App() {

  return (
    <>
    <Header />
     <Routes>
        <Route path ='/' element={<MainPage />} />
        <Route path ='/ship/:name' element = {<ShipDetails />} />
        <Route path = '*' element = {< NotFoundPage />} />
     </Routes>
    </>
  )
}

export default App
