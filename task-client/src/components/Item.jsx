/* eslint-disable react/prop-types */
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
              onChange={() =>
                handleToggle({ ...task, completed: !task.completed })
              }
              checked={task.completed}
            />
            <p
              className={`${task.completed && 'todo-done'}`}
              onClick={() => handleEdit(task)}
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

            <button onClick={() => handleEdit(task)} disabled={task.completed}>
              <MdEdit />
            </button>
          </div>
        </div>
      </>
    </motion.div>
  )
}
