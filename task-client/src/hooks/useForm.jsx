import { useState } from 'react'

export const useForm = ({ ...inputs }) => {
  const [form, setForm] = useState({ ...inputs })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const setValues = ({ ...values }) => {
    setForm({
      ...form,
      ...values
    })
  }

  const handleReset = () => {
    setForm({ ...inputs })
  }

  return {
    ...form,
    form,
    handleChange,
    handleReset,
    setValues
  }
}
