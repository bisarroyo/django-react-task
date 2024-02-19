import { useEffect } from 'react'
import { MdCheck } from 'react-icons/md'
import { useAppContext } from '../hooks/useAppContext'
import { useForm } from '../hooks/useForm'

export const EditTask = ({ handleEdit }) => {
  const { editing } = useAppContext()

  const initialLoad = {
    id: '',
    description: ''
  }

  const { id, form, handleChange, setValues } = useForm({
    id: '',
    description: '',
    title: ''
  })

  useEffect(() => {
    setValues({
      id: editing.id,
      description: editing.description,
      title: editing.title
    })
  }, [editing])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div
        className={!editing.id ? 'edit-container disabled' : 'edit-container'}
      >
        <input
          type='text'
          name='description'
          onChange={handleChange}
          value={form.description ?? initialLoad.description}
          disabled={!editing.id}
        />
        <button onClick={() => handleEdit(id, form)}>
          <MdCheck />
        </button>
      </div>
    </form>
  )
}
