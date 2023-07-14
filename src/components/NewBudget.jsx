import { useState } from 'react'
import Alert from './Alert'

/* eslint-disable react/prop-types */
const NewBudget = ({ budget, setBudget, setIsValidBudget }) => {
  const [message, setMessage] = useState('')

  const handleBudget = e => {
    e.preventDefault()

    if (Number(budget) <= 0 || isNaN(budget)) {
      setMessage('Invalid budget!')
      setBudget('')

      setTimeout(() => {
        setMessage('')
      }, 2500)
      return
    }

    setIsValidBudget(true)
  }

  return (
    <div className='budget-container container shadow'>
      <form className='form' onSubmit={handleBudget}>
        <div className='form-field'>
          <label>What is your Budget?</label>
          <input
            className='new-budget'
            type='number'
            value={budget}
            onChange={e => setBudget(Number(e.target.value))}
            placeholder='$500, $1000, $5000'
          />
        </div>

        <input type='submit' value='Add' />

        {message && <Alert type={'error'}>{message}</Alert>}
      </form>
    </div>
  )
}

export default NewBudget
