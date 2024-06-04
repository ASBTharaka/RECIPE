import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisply from '../../components/foodDisplay/foodDisply'
import AppDownlod from '../../components/AppDownlod/AppDownlod'

const Home = () => {
  const[category,setCategory]=useState("All");
  return (
    <div>
      <Header/>
      <ExploreMenu category={category}setCategory={setCategory}/>
    <FoodDisply category={category}/>
    <AppDownlod/>
    </div>
  )
}

export default Home