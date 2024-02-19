import axios from 'axios'

const taskApi = axios.create({
  baseURL: `http://localhost:8000/tasks/api/v1/tasks`
})

const getAllTasks = () => taskApi.get('/')

const getTask = (id) => taskApi.get(`/${id}/`)

const createTask = (task) => taskApi.post('/', task)

const deleteTask = (id) => taskApi.delete(`/${id}/`)

const updateTask = (id, task) => taskApi.put(`/${id}/`, task)

const apiTask = {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask
}

export default apiTask
