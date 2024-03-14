import { useState } from 'react'

const useBalance = () => {
  const [balance, setBalance] = useState(0)

  const updateBalance = (amount) => {
    setBalance(balance + amount)
  }

  return { balance, updateBalance }
}

export default useBalance
