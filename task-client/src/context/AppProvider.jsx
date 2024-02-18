import { useReducer } from 'react'
import { AppReducer } from '../reducer/AppReducer.js'
import { AppContext } from './AppContext'

const initialState = {
  todos: [],
  editing: {},
  filtering: '',
  loading: false,
  error: null,
  notification: {
    text: 'Succesfully load',
    type: ''
  }
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const { todos, editing, filtering, loading, error, notification } = state

  return (
    <AppContext.Provider
      value={{
        todos,
        editing,
        filtering,
        loading,
        error,
        notification,
        dispatch
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
