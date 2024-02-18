import {
  AddTask,
  RemoveTask,
  setEdit,
  EditTask,
  setFilter,
  ToggleTask,
  NotificationTask,
  Loading
} from '../actions'

const initialState = []

export const AppReducer = (state = initialState, action) => {
  let data = null
  switch (action.type) {
    case Loading:
      data = {
        ...state,
        loading: true
      }
      return data
    case AddTask:
      data = {
        ...state,
        tasks: [...state.tasks, action.payload],
        notification: {
          text: 'TODO added',
          type: 'success'
        },
        loading: false
      }
      return data

    case RemoveTask:
      data = {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              deleted: !todo.deleted
            }
          }
          return todo
        }),
        notification: {
          text: 'Moved to trash',
          type: 'error'
        }
      }
      window.localStorage.setItem('todos', JSON.stringify(data.todos))
      return data

    case setEdit:
      return {
        ...state,
        editing: action.payload
      }

    case EditTask:
      data = {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              description: action.payload.description
            }
          }
          return todo
        }),
        notification: {
          text: 'Todo modified',
          type: 'success'
        }
      }
      window.localStorage.setItem('todos', JSON.stringify(data.todos))
      return data

    case setFilter:
      return {
        ...state,
        filtering: `${action.payload}`
      }

    case ToggleTask:
      data = {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              done: !todo.done
            }
          }
          return todo
        }),
        notification: {
          text: 'TODO done',
          type: 'success'
        }
      }
      window.localStorage.setItem('todos', JSON.stringify(data.todos))
      return data

    case NotificationTask:
      return {
        ...state,
        notification: action.payload
      }
    default:
      return state
  }
}
