import React from 'react'

const Menu = ({menuData}) => {
    return (
        <div className="section-center">
            {menuData.map((item) => {
                const {id, title, img, price, desc} = item
                return (
                   <article className="menu-item">
                    <img src={img} alt={title} className="phot" />
                   </article> 
                )
            })}
        </div>
    ) 
}

export default Menu
