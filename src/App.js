import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'


function App() {
  const [menuData, setMenuData] = useState(items)
  return (
    <main>
      <section>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories />
        <Menu menuData={menuData} />
      </section>
    </main>
  )
}

export default App
