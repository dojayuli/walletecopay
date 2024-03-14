import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { useCollapse } from 'react-collapsed'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'

const Question = ({ question, answer }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
  return (
    <div className='flex flex-col pb-2'>
      <div className='bg-[#171717] hover:bg-[#202020] flex justify-between text-[white] cursor-pointer w-full text-left text-[15px] p-[18px] border-[none]' {...getToggleProps()}>
        <p>{question}</p>
        {isExpanded ? <IoIosArrowUp className='w-[20px] h-[20px]' /> : <IoIosArrowDown className='w-[20px] h-[20px]' />}
      </div>
      <div {...getCollapseProps()}>
        <div className='p-2 border border-[#202020]'>
          {answer}
        </div>
      </div>
    </div>
  )
}

const HelpInfo = () => {
  return (
    <div className='w-full px-8 flex flex-col'>
      <div className='flex items-center gap-3 self-start py-8 '>
        <Link to='/DashBoardUser'> <FaArrowLeft /></Link>
        <h1 className='font-bold text-2xl'>
          Centro de Ayuda
        </h1>
      </div>
      <section>
        <Question
          question='¿Qué es EcoPay? ¿Cómo funciona?'
          answer={<p>EcoPay es una billetera digital que ofrece seguridad y confianza para gestionar tu dinero y realizar diferentes operaciones, de manera gratuita, tales como: pagar y cobrar en sitios online, depositar y retirar dinero, transferir dinero y cobrar con link de pago, entre otras.</p>}
        />
        <Question
          question='Olvidé mi contraseña'
          answer={<p>Si has olvidado tu contraseña, sigue estos pasos:
            <br />1. Presiona ¿Has olvidado tu contraseña? debajo del botón de Iniciar sesión.
            <br />2. A continuación, ingresa tu número correo y haz clic en Siguiente.
            <br />3. Recibirás un código de verificación.
            <br />4. Ingresa el código y presiona Listo.
            <br />5. Ingresa y confirma la contraseña que usarás de aquí en adelante.
          </p>}
        />
        <Question
          question='¿Cómo puedo realizar un seguimiento de mis transacciones anteriores?'
          answer={<p>Puedes realizar un seguimiento de tus transacciones anteriores iniciando sesión en la aplicación y navegando a la sección de historial de transacciones. Allí deberías poder ver un registro detallado de todas las transacciones realizadas con tu cuenta.</p>}
        />
        <Question
          question='¿Cómo contactarme ante cualquier duda o inconveniente?'
          answer={<p>Puedes hacerlo enviando un correo a support@ecopay.com. No dudes en contactarnos cuando lo necesites.</p>}
        />
      </section>
    </div>
  )
}

export default HelpInfo
