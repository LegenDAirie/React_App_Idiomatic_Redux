import React from 'react'

const FilterLink = ({ filter, currentFilter, children, dispatch }) => {

  if ( filter === currentFilter ) {
    return <span>{ children }</span>
  }

  return (
    <a href="#"
      onClick={ event => {
        event.preventDefault()
        dispatch(
          { type: 'SET_VISIBILITY_FILTER'
          , filter
          }
        )
      }}
    >
      { children }
    </a>
  )
}

export default FilterLink
