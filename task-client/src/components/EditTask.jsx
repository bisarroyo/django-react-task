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

  const { id, description, handleChange, setValues } = useForm({
    id: '',
    description: ''
  })

  useEffect(() => {
    setValues({
      id: editing.id,
      description: editing.description
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
          value={description ?? initialLoad.description}
          disabled={!editing.id}
        />
        <button onClick={() => handleEdit(id, description)}>
          <MdCheck />
        </button>
      </div>
    </form>
  )
}
