import { MdDelete, MdEdit, MdRestoreFromTrash } from 'react-icons/md'
import { motion } from 'framer-motion'

export const Item = ({ task, handleDelete, handleEdit, handleToggle }) => {
  return (
    <motion.div
      animate={{
        y: 10,
        opacity: 1
      }}
      initial={{ opacity: 0 }}
    >
      <>
        <div className='item-container'>
          <div className='item-info'>
            <input
              type='checkbox'
              onChange={() => handleToggle(task.id)}
              checked={task.done}
            />
            <p
              className={`${task.done && 'todo-done'}`}
              onClick={() => handleEdit(todo)}
            >
              {task.description}
            </p>
          </div>
          <div className='item-controls'>
            {task.deleted ? (
              <div>
                <button onClick={() => handleDelete(task.id)}>
                  <MdRestoreFromTrash />
                </button>
              </div>
            ) : (
              <button onClick={() => handleDelete(task.id)}>
                <MdDelete />
              </button>
            )}

            <button onClick={() => handleEdit(todo)} disabled={task.done}>
              <MdEdit />
            </button>
          </div>
        </div>
      </>
    </motion.div>
  )
}
