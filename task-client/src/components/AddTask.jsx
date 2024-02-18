import { useForm } from '../hooks/useForm'
import { useTask } from '../hooks/useTask'

function AddTask({ onNewTodo }) {
  const { description, form, handleChange, handleReset } = useForm({
    description: '',
    done: false,
    deleted: false
  })

  const { handleFilterTodo } = useTask()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (description.length <= 3) return
    onNewTodo(form)
    handleReset()
    handleFilterTodo('pending')
  }

  return (
    <form className='m-10' onSubmit={handleSubmit}>
      <input
        className='add-input'
        type='text'
        name='description'
        placeholder='Add a new Todo'
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
