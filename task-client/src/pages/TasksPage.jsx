import { Toaster } from 'react-hot-toast'

import AddTask from '../components/AddTask'
// import { TodosList } from '../containers/TodosList'
// import { Edit } from '../components/Edit'
// import { Filter } from '../components/Filter'

import { UseNotification } from '../hooks/useNotificarions'

import { useTask } from '../hooks/useTask'

export default function TasksPage() {
  UseNotification()
  const {
    todos,
    handleAddTodo,
    handleRemoveTodo,
    handleRemoveTodoPermanent,
    setEditing,
    handleEditTodo,
    handleToggleTodo,
    handleStarredTodo
  } = useTask()

  return (
    <>
      <section>
        <h1>My day</h1>
        <AddTask onNewTodo={handleAddTodo} />
        {/* <Filter />
        <TodosList
          todos={todos}
          handleDelete={handleRemoveTodo}
          handleDeletePermanent={handleRemoveTodoPermanent}
          handleEdit={setEditing}
          handleToggle={handleToggleTodo}
          handleStarred={handleStarredTodo}
        /> */}
      </section>
      {/* <section>
        <h2>Info</h2>
        <Edit handleEdit={handleEditTodo} />
      </section> */}
      <Toaster />
    </>
  )
}
