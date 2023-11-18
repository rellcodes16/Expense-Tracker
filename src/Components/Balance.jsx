import React from 'react'
import { useExpense } from './ExpenseContext'

const Balance = () => {
    const { balance, FormatAmount } = useExpense()

  return (
    <div className='balance'>{FormatAmount(balance)}</div>
  )
}

export default Balance