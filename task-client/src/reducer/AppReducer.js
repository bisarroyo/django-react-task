import {
  SetTasks,
  AddTask,
  RemoveTask,
  setEdit,
  EditTask,
  setFilter,
  ToggleTask,
  NotificationTask,
  Loading,
  Error
} from '../actions'

const initialState = []

export const AppReducer = (state = initialState, action) => {
  let data = null
  switch (action.type) {
    case Error:
      data = {
        ...state,
        error: action.payload,
        loading: false
      }
      return data
    case Loading:
      data = {
        ...state,
        loading: true
      }
      return data

    case SetTasks:
      data = {
        ...state,
        tasks: [action.payload],
        notification: {
          text: 'Tasks loaded',
          type: 'success'
        },
        loading: false
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
        tasks: state.tasks.filter((task) => {
          task.id !== action.payload
        }),
        notification: {
          text: 'Task deleted',
          type: 'error'
        }
      }
      return data

    case setEdit:
      return {
        ...state,
        editing: action.payload
      }

    case EditTask:
      data = {
        ...state,
        todos: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              description: action.payload.description
            }
          }
          return task
        }),
        notification: {
          text: 'Task modified',
          type: 'success'
        }
      }
      return data

    case setFilter:
      return {
        ...state,
        filtering: `${action.payload}`
      }

    case ToggleTask:
      data = {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload) {
            return {
              ...task,
              completed: !task.completed
            }
          }
          return task
        }),
        notification: {
          text: 'TODO done',
          type: 'success'
        }
      }
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
