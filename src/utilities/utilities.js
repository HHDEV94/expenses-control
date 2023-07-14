import SaveMoneyIcon from '../img/save_icon.svg'
import HomeIcon from '../img/home_icon.svg'
import FoodIcon from '../img/food_icon.svg'
import ExpenseIcon from '../img/expense_icon.svg'
import FreeTimeIcon from '../img/freeTime_icon.svg'
import HealthIcon from '../img/health_icon.svg'
import SubscriptionIcon from '../img/subscription_icon.svg'

export const iconCategory = category => {
  const categoryObj = {
    saveMoney: SaveMoneyIcon,
    food: FoodIcon,
    home: HomeIcon,
    expenses: ExpenseIcon,
    freeTime: FreeTimeIcon,
    health: HealthIcon,
    subscriptions: SubscriptionIcon
  }

  return categoryObj[category]
}

export const formaterCurrency = amount => {
  return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}

export const idGenerator = () => {
  const random = Math.random().toString(36).substring(2)
  const date = Date.now().toString(36)

  return random + date
}

export const dateFormatter = date => {
  const newDate = new Date(date)
  const options = {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  }

  return newDate.toLocaleDateString('es-ES', options)
}
