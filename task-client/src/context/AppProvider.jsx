import { useReducer } from 'react'
import { AppReducer } from '../reducer/AppReducer.js'
import { AppContext } from './AppContext'

const initialState = {
  tasks: [],
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

  const { tasks, editing, filtering, loading, error, notification } = state

  return (
    <AppContext.Provider
      value={{
        tasks,
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
