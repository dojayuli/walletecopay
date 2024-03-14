import MoneyInput from '../../../components/MoneyInput/MoneyInput'
import { useEffect, useState } from 'react'
import { FaArrowLeft, FaCheck } from 'react-icons/fa'
import { IoIosClose } from 'react-icons/io'
import { TiPlus, TiMinus } from 'react-icons/ti'
import axios from 'axios'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useBalance from '../../../components/CustomHooks/CustonHooks'
import mercadopago from '../../../assets/mercadopago.png'
import personalpay from '../../../assets/personalpay.png'
import applepay from '../../../assets/applepay.png'
import googlewallet from '../../../assets/googlewallet.png'
import naranjax from '../../../assets/naranjax.png'
import paypall from '../../../assets/paypall.png'
import { Modal } from '../../../components'

const TABLE_HEAD = ['Entidad', 'Monto', 'Estado', '']

const TABLE_ROWS = [
  {
    img: mercadopago,
    name: 'Mercadopago',
    status: 'Habilitado'
  },
  {
    img: personalpay,
    name: 'PersonalPay',
    status: 'Habilitado'
  },
  {
    img: applepay,
    name: 'ApplePay',
    status: 'Habilitado'
  },
  {
    img: googlewallet,
    name: 'GoogleWallet',
    status: 'Habilitado'
  },
  {
    img: naranjax,
    name: 'NaranjaX',
    status: 'Habilitado'
  },
  {
    img: paypall,
    name: 'PayPall',
    status: 'Habilitado'
  }
]

const VirtualCashierInfo = () => {
  const [searchText, setSearchText] = useState('')
  const [filteredRows, setFilteredRows] = useState(TABLE_ROWS)
  const [amount, setAmount] = useState('')
  const { updateBalance } = useBalance()
  const navigate = useNavigate()
  const location = useLocation()
  const action = new URLSearchParams(location.search).get('action')
  const [modalOpen, setModalOpen] = useState(false)
  const handleModalOpen = () => setModalOpen(true)
  const handleModalClose = () => {
    setModalOpen(false)
    navigate('/DashboardUser')
  }

  const filterRows = (text) => {
    const filtered = TABLE_ROWS.filter(row =>
      row.name.toLowerCase().includes(text.toLowerCase())
    )
    setFilteredRows(filtered)
  }

  useEffect(() => {
    filterRows(searchText)
  }, [searchText])

  // Logica para deposito y extraccion de dinero
  const handleDeposit = async () => {
    try {
      const token = window.localStorage.getItem('token')
      console.log(parseInt(amount))
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
      await axios.post('https://s13-21-ft-java.onrender.com/api/v1/deposit', { amount: parseInt(amount) })
      updateBalance(parseInt(amount))
    } catch (error) {
      console.error('Error al guardar usuario:', error)
    }
  }
  const handleWithdraw = async () => {
    try {
      const token = window.localStorage.getItem('token')
      console.log(parseInt(amount))
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
      await axios.post('https://s13-21-ft-java.onrender.com/api/v1/withdraw', { amount: parseInt(amount) })
      updateBalance(-parseInt(amount))
    } catch (error) {
      console.error('Error al guardar usuario:', error)
    }
  }

  return (
    <div className='w-full max-w-xl mt-4 flex flex-col justify-center items-center gap-3 pl-2'>
      <section className='flex items-center gap-3 self-start'>
        <Link to='/DashBoardUser'><FaArrowLeft /></Link>
        <h1 className='font-bold text-2xl'>Depósitos y Extracciones</h1>
      </section>
      <section className='w-full h-4/5 overflow-y-auto p-2'>
        <div className='w-full flex flex-row items-center my-3'>
          <input
            label='Search' type='text' placeholder='Buscar' className='bg-[#434740] border pl-2 p-1 w-full rounded-lg' value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <table className='w-full table-auto'>
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className='bg-[#434740] px-2 py-2'>{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredRows.map(
              (
                {
                  img,
                  name,
                  status
                },
                index
              ) => {
                const isLast = index === TABLE_ROWS.length - 1
                const classes = isLast
                  ? 'p-2'
                  : 'p-2 border-b border-blue-gray-50'
                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className='flex flex-col sm:flex-row items-center gap-3'>
                        <img
                          src={img}
                          alt={name}
                          size='md'
                          className='border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1 h-10 w-10'
                        />
                        <p className='font-bold'>{name}</p>
                      </div>
                    </td>
                    <td className={classes}>
                      {status === 'Habilitado'
                        ? <MoneyInput
                            value={amount}
                            onChange={(value) => setAmount(value)}
                          />
                        : ''}
                    </td>
                    <td className={classes}>
                      {status === 'Habilitado'
                        ? <FaCheck className='p-2.5 bg-gradient-to-b from-green-500 to-lime-400 rounded text-white text-xs w-8 h-8' />
                        : <IoIosClose className='p-1 bg-[#EF8304] rounded text-white w-8 h-8' />}
                    </td>
                    <td className={classes}>
                      <div className={status === 'Habilitado'
                        ? 'flex flex-col gap-2 w-[100px]'
                        : 'hidden'}
                      >

                        {action === 'deposit' && (
                          <>
                            <button className='flex gap-2' onClick={() => { handleDeposit(); handleModalOpen() }}>
                              <TiPlus className='rounded-full bg-black p-1 h-6 w-6 text-white text-center' /> Depositar
                            </button>
                            <Modal titulo='Depósito Realizado' texto='Operación Exitosa!' isOpen={modalOpen} closeModal={handleModalClose} />
                          </>
                        )}
                        {action === 'withdraw' && (
                          <>
                            <button className='flex gap-2' onClick={() => { handleWithdraw(); handleModalOpen() }}>
                              <TiMinus className='rounded-full bg-black p-1 h-6 w-6 text-white text-center' /> Extraer
                            </button>
                            <Modal titulo='Extracción Realizada' texto='Operación Exitosa!' isOpen={modalOpen} closeModal={handleModalClose} />
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                )
              }
            )}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default VirtualCashierInfo
