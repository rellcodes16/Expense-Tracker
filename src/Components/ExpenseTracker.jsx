import Income from './Income'
import Expense from './Expense'
import List from './List'
import Form from './Form'
import './ExpenseTracker.css'
import { ExpenseProvider} from './ExpenseContext'
import Balance from './Balance'


const ExpenseTracker = () => {
  return (
    <ExpenseProvider>
      <div className='expensetracker'>
        <h2>Expense Tracker</h2>
          <div className='total'>
            <h3>MY BALANCE</h3>
            <Balance/>
          </div>
          <div className='inner-div'>
            <Income/>
            <Expense/>
          </div>
          <List/>
          <Form/>
      </div>
    </ExpenseProvider>
  )
}

export default ExpenseTracker