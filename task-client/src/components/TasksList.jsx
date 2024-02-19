/* eslint-disable react/prop-types */
import { Item } from '../components/Item'
import { useAppContext } from '../hooks/useAppContext'

export const TasksList = ({
  tasks,
  handleDelete,
  handleEdit,
  handleToggle
}) => {
  const { filtering } = useAppContext()

  const filterTodos = (item) => {
    if (filtering === 'deleted') {
      return item.deleted === true
    }
    if (filtering === 'pending') {
      return item.completed === false
    }
    if (filtering === 'done') {
      return item.done === true
    }
    return item.done === false
  }
  return (
    <div>
      {tasks.filter(filterTodos).map((task, index) => (
        <div key={index}>
          <Item
            task={task}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleToggle={handleToggle}
          />
        </div>
      ))}
    </div>
  )
}
