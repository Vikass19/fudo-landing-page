import React from 'react'
import Navbar from './componants/common/Navbar'
import Products from './componants/Products'
import ProductDesc from './componants/ProductDesc'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Addproducts from './componants/Addproducts'
import FoodLanding from './componants/common/FoodLanding'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
    
      <Routes>
        <Route path='/' element={<FoodLanding />} />
        {/* <Route path='/products/:id' element={<ProductDesc />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
