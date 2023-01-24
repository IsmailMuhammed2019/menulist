import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

const newitems = ['all', ...new Set(items.map(item) => item.category)]

function App() {

  const filterItems = (category) => {
    if(category === 'all'){
      setMenuData(items)
      return
    }
    const newCategory = items.filter((item) => item.category === category)
    setMenuData(newCategory)
  }
  const [menuData, setMenuData] = useState(items)
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
