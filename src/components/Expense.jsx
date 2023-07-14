/* eslint-disable react/prop-types */
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'
import { dateFormatter, iconCategory } from '../utilities/utilities'

const Expense = ({ expense, setEditExpense, handleDeleteExpense }) => {
  const { name, amount, category, date, id } = expense

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setEditExpense(expense)}>Edit</SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction destructive={true} onClick={() => handleDeleteExpense(id)}>
        Delete
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList>
      <SwipeableListItem leadingActions={leadingActions()} trailingActions={trailingActions()}>
        <div className='expense shadow'>
          <div className='expense-content'>
            <img src={iconCategory(category)} alt='expense icon' />
            <div className='expense-description'>
              <p className='category'>{category}</p>
              <p className='expense-name'>{name}</p>
              <p className='expense-date'>
                Added: <span>{dateFormatter(date)}</span>
              </p>
            </div>
          </div>
          <p className='expense-amount'>${amount}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Expense
