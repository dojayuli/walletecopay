import { BsQrCode } from 'react-icons/bs'
import { FaRegAddressCard, FaPlus } from 'react-icons/fa'
import { FaMoneyBillTrendUp } from 'react-icons/fa6'
import { BiSolidDonateHeart } from 'react-icons/bi'

export default function RoundButton ({ info, option }) {
  let Icon

  // Asign the icon acording to the iconType received
  switch (option) {
    case 'option1':
      Icon = BiSolidDonateHeart
      break
    case 'option2':
      Icon = BsQrCode
      break
    case 'option3':
      Icon = FaRegAddressCard
      break
    case 'option4':
      Icon = FaMoneyBillTrendUp
      break
    case 'option5':
      Icon = FaPlus
      break
    default:
      Icon = null
  }

  return (
    <div className='flex flex-col items-center'>
      <button className='flex justify-center items-center border gap-2 rounded-full p-3 bg-gradient-to-b from-green-500 to-lime-400 h-16 w-16'>
        {Icon ? <Icon className='text-[32px] text-white' /> : null}
      </button>
      <p className='text-[0.8rem] font-medium mt-2'>{info}</p>
    </div>

  )
}
