import { useTask } from '../hooks/useTask'
import { useAppContext } from '../hooks/useAppContext'

export const Filter = () => {
  const { handleFilterTask } = useTask()

  const { filtering } = useAppContext()

  const filterByDeleted = () => {
    handleFilterTask('deleted')
  }
  const filterByPending = () => {
    handleFilterTask('pending')
  }
  const filterByStarred = () => {
    handleFilterTask('starred')
  }
  const filterByDone = () => {
    handleFilterTask('done')
  }

  return (
    <>
      <button
        onClick={filterByDeleted}
        className={`${filtering === 'deleted' && 'active-filter'}`}
      >
        Deleted
      </button>
      <button
        onClick={filterByPending}
        className={`${filtering === 'pending' && 'active-filter'}`}
      >
        Pending
      </button>
      <button
        onClick={filterByStarred}
        className={`${filtering === 'starred' && 'active-filter'}`}
      >
        Starred
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
