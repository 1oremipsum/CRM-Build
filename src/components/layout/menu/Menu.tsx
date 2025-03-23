import React from 'react'

import { default as MenuItem } from './items/MenuItem'

const Menu: React.FC = () => {
  return (
    <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
        <p className="menu-label is-hidden-touch">
            Minhas Vendas
        </p>
        <ul className="menu-list">
            <MenuItem href='/' label='Home' />
            <MenuItem href='/' label='Cadastros' />
            <MenuItem href='/' label='Configuração' />
            <MenuItem href='/' label='Sair' />
        </ul>
    </aside>
  )
}

export default Menu