import React from 'react'
import { Link } from 'react-router-dom'

import { default as ItemProps } from './MenuItemProps'

const MenuItem: React.FC<ItemProps> = (props: ItemProps) => {
  return (
    <li>
      <Link to={props.href}>
        <a>
          <span className='icon'></span> { props.label }
        </a>
      </Link>
    </li>
  )
}

export default MenuItem