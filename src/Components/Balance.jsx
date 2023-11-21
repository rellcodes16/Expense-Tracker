import React from 'react'
import { useExpense } from './ExpenseContext'

const Balance = () => {
    const { balance, FormatBalance } = useExpense()

  return (
    <div className='balance'>{FormatBalance(balance)}</div>
  )
}

export default Balance