import axios from 'axios'
import { createContext, useContext, useState } from 'react'

const BalanceContext = createContext()

export const BalanceProvider = ({ children }) => {
  const [balance, setBalance] = useState(0)
  const [userName, setUserName] = useState('')

  const updateBalance = async () => {
    try {
      const token = window.localStorage.getItem('token')
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
      const response = await axios.get('https://s13-21-ft-java.onrender.com/api/v1/users')
      const balanceAmount = response.data.account.balance
      const username = response.data.username
      setBalance(balanceAmount)
      setUserName(username)
    } catch (error) {
      console.error('Error al obtener el saldo:', error)
    }
  }

  return (
    <BalanceContext.Provider value={{ balance, userName, updateBalance }}>
      {children}
    </BalanceContext.Provider>
  )
}

export const useBalance = () => useContext(BalanceContext)
