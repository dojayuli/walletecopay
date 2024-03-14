import { IoIosCloseCircle } from 'react-icons/io'
import { useBalance } from '../../Context/BalanceContext'
import modal from '../../assets/Modal.png'
const Modal = ({ isOpen, closeModal, titulo, texto }) => {
  const { updateBalance } = useBalance()

  if (!isOpen) return null

  const handleTransactionSuccess = async () => {
    try {
      await updateBalance()
    } catch (error) {
      console.error('Error al actualizar el saldo:', error)
    }
  }

  return (
    <>
      <div className='absolute inset-0 backdrop-blur bg-[#1E1E1E99] w-full h-full flex flex-col justify-center items-center'>
        <div className='relative w-[300px] bg-[#3E3E3E] p-8 rounded-3xl border border-[#249C3B] text-center'>
          <IoIosCloseCircle onClick={() => { closeModal(); handleTransactionSuccess() }} className='absolute text-[#249C3B] -top-[20px] -right-[20px] size-[40px]' />
          <p className='text-[#249C3B] font-bold text-xl mb-2'>{titulo}</p>
          <p>{texto}</p>
        </div>
        <img src={modal} alt='Logo EcoPay' className='absolute text-[#249C3B] bottom-[40px] right-[40px] w-[200px]' />
      </div>
    </>
  )
}

export default Modal
