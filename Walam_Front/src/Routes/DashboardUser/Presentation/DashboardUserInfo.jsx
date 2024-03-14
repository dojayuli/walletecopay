import { Link } from 'react-router-dom'
import circle from '../../../assets/greenCircle.png'
import cardImg from '../../../assets/cardImg.png'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { ActionButton, Modal, RoundButton } from '../../../components'
import { MovementsHistory } from '../../index.js'
import { FaUserCircle } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useBalance } from '../../../Context/BalanceContext.jsx'

const DashboardUserInfo = () => {
  const { balance, userName, updateBalance } = useBalance()
  const [loading, setLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const handleModalOpen = () => setModalOpen(true)
  const handleModalClose = () => setModalOpen(false)

  const handleCard = async () => {
    try {
      const token = window.localStorage.getItem('token')
      if (!token) {
        throw new Error('Token no encontrado en el almacenamiento local')
      }
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
      const data = await axios.post('https://s13-21-ft-java.onrender.com/api/v1/card/create')
      console.log(data)
    } catch (error) {
      console.error('Error al solicitar la tarjeta:', error.message)
      // Manejar el error, por ejemplo, mostrar un mensaje al usuario
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      await updateBalance()
      setLoading(false)
    }

    fetchData()
  }, [updateBalance])

  if (loading) {
    return <div>Cargando...</div>
  }

  return (
    <>
      <div className='w-[85%] xl:w-0 xl:mt-6 flex flex-col justify-center items-center xl:hidden'>
        <section className='flex gap-2 self-start'>
          <FaUserCircle className='text-4xl' />
          <div className='flex justify-center items-center gap-3 w-full'>
            <p className='text-xl'>
              Hola,
              <Link to='/UsersDataForm' className='font-semibold text-2xl'> {userName}</Link>
            </p>
            <Link to='/UsersDataForm' className='flex items-center'>
              <p>(Datos Usuario)</p>
              <IoIosArrowRoundForward className='text-[40px]' />
            </Link>
          </div>
        </section>
        <section className='flex gap-6'>
          <div className='flex flex-col justify-evenly items-center'>
            <p className='w-full font-medium'>Disponible</p>
            <p className='w-full text-2xl font-medium'><span>$</span>{balance}<span>,00</span></p>
            <Link to='/MovementsHistory'><p className='w-full text-green-700 font-medium text-center'>Historial de Movimientos</p></Link>
          </div>
          <div className='flex flex-col pt-4 gap-4'>
            <ActionButton info='Depositar' option='option1' link='/VirtualCashier?action=deposit' />
            <ActionButton info='Transferir' option='option2' link='/Transfer' />
            <ActionButton info='Extraer' option='option3' link='/VirtualCashier?action=withdraw' />
          </div>
        </section>
        <section className='w-full flex gap-3 items-center py-4 px-2 mt-6 border rounded-xl p-5 bg-DashboardDesktop shadow-md outline-1 border-neutral-700'>
          <img src={cardImg} onClick={() => { handleModalOpen(); handleCard() }} alt='Imagen tarjeta virtual EcopPay' className=' cursor-pointer rounded-3xl w-[240px] h-[120px] order-1' />
          <Modal titulo='Tarjeta Solicitada con éxito!' texto='Esperamos que la disfrutes!' isOpen={modalOpen} closeModal={handleModalClose} />
          <div className='flex flex-col items-end py-3'>
            <p className='text-white font-sm text-lg pl-4 text-right '>
              Solicita tu tarjeta Virtual ECOPAY Haciendo Click Acá!
            </p>
            <img src='/img/Top Estate Agent.png' alt='Usuarios EcoPay' className='w-[160px]' />
          </div>
        </section>
        <section className=' w-full mt-8 flex justify-evenly  '>
          <Link to='/Donate'>
            <RoundButton info='Donación' option='option1' />
          </Link>
          <RoundButton info='QR' option='option2' />
          <Link to='/CVUUser'>
            <RoundButton info='CVU' option='option3' />
          </Link>
          <Link to='/ForeignExchange'>
            <RoundButton info='Divisas' option='option4' />
          </Link>
          <RoundButton info='Ver más' option='option5' />
        </section>
        <section className='w-full mt-8 '>
          <button className='border w-full bg-zinc-700 flex justify-center items-center rounded-lg py-3 gap-3'>
            <p className='text-white'>Iniciativa</p>
            <img src={circle} alt='círculo verde' />
            <p className='text-green-500 font-bold'>ECOPAY</p>
          </button>
        </section>
      </div>
      <div className='hidden xl:w-[68.8%] xl:flex'>
        <MovementsHistory />
      </div>
    </>
  )
}

export default DashboardUserInfo
