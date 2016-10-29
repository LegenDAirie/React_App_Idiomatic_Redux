import React from 'react'
import store from './store'

const Link = ({ active, children, onClick }) => {

  if ( active ) {
    return <span>{ children }</span>
  }

  return (
    <a href="#"
      onClick={ event => {
        event.preventDefault()
        onClick()
      }}
    >
      { children }
    </a>
  )
}

const FilterLink = React.createClass({

  componentDidMount () {
    this.unsubscribe = store.subscribe( () => {
      this.forceUpdate()
    })
  },

  componentWillUnmount () {
    this.unsubscribe()
  },

  render () {
    const props = this.props
    const state = store.getState()

    return (
      <Link
        active={
          props.filter === state.visibilityFilter
        }
        onClick={ () => {
          store.dispatch(
            { type: 'SET_VISIBILITY_FILTER'
            , filter: props.filter
            }
          )
        }}
      >
      { props.children }
      </Link>
    )
  }
})


export default FilterLink
