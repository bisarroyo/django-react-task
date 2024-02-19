import { useTask } from '../hooks/useTask'
import { useAppContext } from '../hooks/useAppContext'

export const Filter = () => {
  const { handleFilterTask } = useTask()

  const { filtering } = useAppContext()

  const filterByPending = () => {
    handleFilterTask('pending')
  }
  const filterByDone = () => {
    handleFilterTask('done')
  }

  return (
    <>
      <button
        onClick={filterByPending}
        className={`${filtering === 'pending' && 'active-filter'}`}
      >
        Pending
      </button>
      <button
        onClick={filterByDone}
        className={`${filtering === 'done' && 'active-filter'}`}
      >
        Done
      </button>
    </>
  )
}
