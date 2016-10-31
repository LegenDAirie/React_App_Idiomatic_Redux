import React from 'react'
import FilterLink from './filterLink'

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {', '}
    <FilterLink filter="ACTIVE">
      Active
    </FilterLink>
    {', '}
    <FilterLink filter="COMPLETED">
      Completed
    </FilterLink>
  </p>
)

export default Footer
