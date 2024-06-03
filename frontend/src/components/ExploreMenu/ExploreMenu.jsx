import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id='explore-menu'>
      <h1>Explore Our Recipes</h1>
      <p className='explore-menu-text'>Dive into a world of culinary wonders with our exclusive collection of recipes! From timeless classics to innovative creations, each recipe is a journey waiting to be savored. Discover the secrets of gourmet cooking and bring a touch of magic to your kitchen. Let's cook up something extraordinary together!</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div 
              key={index} 
              onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
              className={`explore-menu-list-item ${category === item.menu_name ? "active" : ""}`}
            >
              <img src={item.menu_image} alt={item.menu_name} />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
