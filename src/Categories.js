import React from 'react'

const Categories = ({itemsMenu, filterItems}) => {
  return (
    <div className='btn-container'>
      {itemsMenu.map((category, index) => {
        return (
          <button className='filter-btn' onClick={() => filterItems(category)} key={index}>{category}</button>
        )
      })}
    </div>
  )
}

export default Categories
