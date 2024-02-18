import { Item } from '../components/Item'
import { useAppContext } from '../hooks/useAppContext'

export const TodosList = ({
  todos,
  handleDelete,
  handleDeletePermanent,
  handleEdit,
  handleToggle,
  handleStarred
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
      {todos.filter(filterTodos).map((todo) => (
        <div key={todo.id}>
          <Item
            todo={todo}
            handleDelete={handleDelete}
            handleDeletePermanent={handleDeletePermanent}
            handleEdit={handleEdit}
            handleToggle={handleToggle}
            handleStarred={handleStarred}
          />
        </div>
      ))}
    </div>
  )
}
