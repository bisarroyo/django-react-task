import { Toaster } from 'react-hot-toast'

import AddTask from '../components/AddTask'
import { TasksList } from '../components/TasksList'
import { Filter } from '../components/Filter'
import { EditTask } from '../components/EditTask'

import { UseNotification } from '../hooks/useNotificarions'

import { useTask } from '../hooks/useTask'

export default function TasksPage() {
  UseNotification()
  const {
    tasks,
    handleAddTask,
    handleRemoveTask,
    setEditing,
    handleEditTask,
    handleToggleTask
  } = useTask()

  return (
    <>
      <section>
        <h1>My day</h1>
        <AddTask onNewTask={handleAddTask} />
        <Filter />
        <TasksList
          tasks={tasks}
          handleDelete={handleRemoveTask}
          handleEdit={setEditing}
          handleToggle={handleToggleTask}
        />
      </section>
      <section>
        <h2>Info</h2>
        <EditTask handleEdit={handleEditTask} />
      </section>
      <Toaster />
    </>
  )
}
