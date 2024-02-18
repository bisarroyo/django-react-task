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
      return item.done === false && item.deleted === false
    }
    if (filtering === 'starred') {
      return (
        item.starred === true && item.done === false && item.deleted === false
      )
    }
    if (filtering === 'done') {
      return item.done === true && item.deleted === false
    }
    return item.done === false && item.deleted === false
  }
  return (
    <div>
      {tasks.filter(filterTodos).map((task) => (
        <div key={task.id}>
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
