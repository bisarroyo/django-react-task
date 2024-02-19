import { useAppContext } from '../hooks/useAppContext'
import { useForm } from '../hooks/useForm'
import { useTask } from '../hooks/useTask'

function AddTask({ onNewTask }) {
  const { title, description, form, handleChange, handleReset } = useForm({
    title: '',
    description: '',
    done: false
  })

  const { handleFilterTask } = useTask()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (description.length <= 3) return
    onNewTask(form)
    handleReset()
    handleFilterTask('pending')
  }

  return (
    <form className='m-10' onSubmit={handleSubmit}>
      <input
        className='add-input'
        type='text'
        name='title'
        placeholder='Add task title'
        value={title}
        onChange={handleChange}
      />
      <input
        className='add-input'
        type='text'
        name='description'
        placeholder='Add a new Task'
        value={description}
        onChange={handleChange}
      />
      <div className='add-submenu'>
        <input type='submit' className='add-btn' value='add' />
      </div>
    </form>
  )
}

export default AddTask
