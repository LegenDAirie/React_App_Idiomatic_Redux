import React from 'react'
import FilterLink from './filterLink'

const Footer = ({ store }) => (
  <p>
    Show:
    {' '}
    <FilterLink filter="SHOW_ALL"
      store={ store }
    >
      All
    </FilterLink>
    {', '}
    <FilterLink filter="ACTIVE"
      store={ store }
    >
      Active
    </FilterLink>
    {', '}
    <FilterLink filter="COMPLETED"
      store={ store }
    >
      Completed
    </FilterLink>
  </p>
)

export default Footer
