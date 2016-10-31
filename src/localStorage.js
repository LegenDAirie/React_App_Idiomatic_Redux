export const loadState = () => {
  try {
    const persistedState = localStorage.getItem('state')
    if (persistedState === null) {
      return undefined
    }

    return JSON.parse(persistedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = state => {
  try {
    const persistedState = JSON.stringify(state)
    localStorage.setItem('state', persistedState)
  } catch (err) {
    return undefined
  }
}
