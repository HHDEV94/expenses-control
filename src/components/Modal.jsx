/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import CloseModalIcon from '../img/close.svg'
import Alert from './Alert'
import { idGenerator } from '../utilities/utilities'

const Modal = ({ editExpense, animateModal, setModal, setAnimateModal, handleSaveExpense }) => {
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')

  useEffect(() => {
    if (Object.keys(editExpense).length > 0) {
      setName(editExpense.name)
      setAmount(editExpense.amount)
      setCategory(editExpense.category)
    }
  }, [editExpense])

  const handleCloseModal = () => {
    setAnimateModal(false)

    setTimeout(() => {
      setModal(false)
    }, 500)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if ([name, amount, category].includes('')) {
      setMessage('All fields are required!!!')

      setTimeout(() => {
        setMessage('')
      }, 2000)
      return
    }

    handleSaveExpense({ name, amount, category, id: idGenerator(), date: Date.now() })
    handleCloseModal()
  }

  return (
    <div className='modal'>
      <div className='close-modal'>
        <img src={CloseModalIcon} alt='Close Modal Icon' onClick={handleCloseModal} />
      </div>

      <form className={`form ${animateModal ? 'animate' : 'close'}`} onSubmit={handleSubmit}>
        <legend>New Expense</legend>

        {message && <Alert type={'error'}>{message}</Alert>}

        <div className='form-field'>
          <label htmlFor='name'>Expense name:</label>
          <input
            id='name'
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder='supermarket, bus, taxi...'
          />
        </div>

        <div className='form-field'>
          <label htmlFor='amount'>Amount:</label>
          <input
            id='amount'
            type='number'
            value={amount}
            onChange={e => setAmount(Number(e.target.value))}
            placeholder='$50, $100, $200...'
          />
        </div>

        <div className='form-field'>
          <label htmlFor='category'>Amount:</label>
          <select id='category' value={category} onChange={e => setCategory(e.target.value)}>
            <option value=''>-- Select Category --</option>
            <option value='saveMoney'>Save Money</option>
            <option value='food'>Food</option>
            <option value='home'>Home</option>
            <option value='expenses'>Expenses</option>
            <option value='freeTime'>Free Time</option>
            <option value='health'>Health</option>
            <option value='subscriptions'>Subscriptions</option>
          </select>
        </div>

        <input type='submit' value='Add Expense' />
      </form>
    </div>
  )
}

export default Modal
