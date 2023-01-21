import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

function App() {
  const {Items, seItems} = useState(items)
  const {menuItems, setMenuItems} = ([])

  return (
    <main>
      <section>
        <div className="titl">Our Menu</div>
        <div className="underline"></div>
      </section>
    </main>
  )
}

export default App
