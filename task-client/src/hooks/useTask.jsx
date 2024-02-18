import {
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
import { useAppContext } from './useAppContext'
import apiTask from '../api/task.api'

export const useTask = () => {
  const { tasks, dispatch } = useAppContext()

  const { getAllTasks, getTask, createTask, deleteTask, updateTask } = apiTask

  const handleAddTask = async (task) => {
    dispatch({ type: Loading })
    try {
      await createTask(task)
      const action = {
        type: AddTask,
        payload: task
      }
      dispatch(action)
    } catch (e) {
      const action = {
        type: Error,
        payload: 'Error syncsing the task'
      }
      dispatch(action)
    }
  }

  const handleRemoveTask = (id) => {
    const action = {
      type: RemoveTask,
      payload: id
    }
    dispatch(action)
  }

  const setEditing = (task) => {
    const action = {
      type: setEdit,
      payload: task
    }
    dispatch(action)
  }

  const handleEditTask = (id, description) => {
    const action = {
      type: EditTask,
      payload: {
        id,
        description
      }
    }
    dispatch(action)
  }
  const handleFilterTask = (filter) => {
    const action = {
      type: setFilter,
      payload: filter
    }
    dispatch(action)
  }

  const handleToggleTask = (id) => {
    const action = {
      type: ToggleTask,
      payload: id
    }
    dispatch(action)
  }

  const handleNotification = () => {
    const action = {
      type: NotificationTask,
      payload: ''
    }
    dispatch(action)
  }

  return {
    tasks,
    handleAddTask,
    handleRemoveTask,
    setEditing,
    handleEditTask,
    handleFilterTask,
    handleToggleTask,
    handleNotification
  }
}
