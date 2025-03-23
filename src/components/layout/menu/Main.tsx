import React from 'react'

const Main: React.FC = () => {
  return (
    <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
        <p className="menu-label is-hidden-touch">
            Minhas Vendas
        </p>
        <ul className="menu-list">
            <li>
                <a href="#">
                    <span className='icon'></span> Item  
                </a>
            </li>
            <li>
                <a href="#">
                    <span className='icon'></span> Item  
                </a>
            </li>
            <li>
                <a href="#">
                    <span className='icon'></span> Item  
                </a>
            </li>
            <li>
                <a href="#">
                    <span className='icon'></span> Item  
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Main