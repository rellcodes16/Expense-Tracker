import React from 'react'
import { useExpense } from './ExpenseContext'

const Expense = () => {
  const { FormatAmount, totalExpense } = useExpense()
 
  return (
    <div className='expense'>
        <h3>EXPENSES</h3>
        <h3>{FormatAmount(totalExpense)}</h3>
    </div>
  )
}

export default Expense