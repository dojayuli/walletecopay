import { useState } from 'react'

export default function MoneyInput ({ value, onChange }) {
  const [amount, setAmount] = useState(value)

  const handleChange = (event) => {
    const inputAmount = event.target.value
    const sanitizedAmount = inputAmount.replace(/\D/g, '')
    setAmount(sanitizedAmount)
    onChange(sanitizedAmount) // Notificar al componente padre del cambio
  }

  return (
    <div className='flex items-center'>
      <input
        type='text'
        value={amount === '' ? '' : '$' + amount}
        onChange={handleChange}
        placeholder='$000'
        className='text-end py-1 w-10 sm:w-20 max-w-48 focus:outline-none bg-transparent'
      />
      <span>.00</span>
    </div>
  )
}
