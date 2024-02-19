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
import { useAppContext } from './useAppContext'
import apiTask from '../api/task.api'

export const useTask = () => {
  const { tasks, dispatch } = useAppContext()

  const { getAllTasks, getTask, createTask, deleteTask, updateTask } = apiTask

  const handleSetTasks = async () => {
    dispatch({ type: Loading })
    try {
      const { data } = await getAllTasks()
      const action = {
        type: SetTasks,
        payload: data
      }
      dispatch(action)
    } catch (e) {
      const action = {
        type: Error,
        payload: 'Error getting all tasks'
      }
      dispatch(action)
    }
  }

  const handleAddTask = async (task) => {
    dispatch({ type: Loading })
    try {
      const {
        data: { id, title, description, completed }
      } = await createTask(task)
      const action = {
        type: AddTask,
        payload: {
          id,
          title,
          description,
          completed
        }
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

  const handleRemoveTask = async (id) => {
    dispatch({ type: Loading })
    try {
      await deleteTask(id)
      const action = {
        type: RemoveTask,
        payload: id
      }
      dispatch(action)
    } catch (error) {
      const action = {
        type: Error,
        payload: 'Error syncsing the task'
      }
      dispatch(action)
    }
  }

  const setEditing = (task) => {
    const action = {
      type: setEdit,
      payload: task
    }
    dispatch(action)
  }

  const handleEditTask = (id, task) => {
    console.log(task)
    dispatch({ type: Loading })
    try {
      const { data } = updateTask(id, task)
      console.log(data)
      const action = {
        type: EditTask,
        payload: {
          id,
          task
        }
      }
      dispatch(action)
    } catch (error) {
      const action = {
        type: Error,
        payload: 'Error syncsing the task'
      }
      dispatch(action)
    }
  }
  const handleFilterTask = (filter) => {
    const action = {
      type: setFilter,
      payload: filter
    }
    dispatch(action)
  }

  const handleToggleTask = async (task) => {
    dispatch({ type: Loading })
    try {
      await updateTask(task.id, task)
      const action = {
        type: ToggleTask,
        payload: task.id
      }
      dispatch(action)
    } catch (error) {
      const action = {
        type: Error,
        payload: 'Error updating task'
      }
      dispatch(action)
    }
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
    handleSetTasks,
    handleAddTask,
    handleRemoveTask,
    setEditing,
    handleEditTask,
    handleFilterTask,
    handleToggleTask,
    handleNotification
  }
}
