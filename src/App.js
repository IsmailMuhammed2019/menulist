import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

const newItems = ['all', ...new Set(items.map((item) => item.category))]

function App() {
    const [menuData, setMenuData] = useState(items)
    const [itemsMenu, setItemsMenu] = useState(newItems)
  const filterItems = (category) => {
    if(category === 'all'){
      setMenuData(items)
      return
    }
    const newCategory = items.filter((item) => item.category === category)
    setMenuData(newCategory)
  }
  return (
    <main>
      <section>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filterItems={filterItems}/>
        <Menu menuData={menuData} />
      </section>
    </main>
  )
}

export default App
