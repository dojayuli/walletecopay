import { Link } from 'react-router-dom'
import { FormInput, Modal } from '../../../components'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import axios from 'axios'
import { FaArrowLeft } from 'react-icons/fa'

export default function TransferInfo () {
  const [modalOpen, setModalOpen] = useState(false)
  const handleModalOpen = () => setModalOpen(true)
  const handleModalClose = () => setModalOpen(false)

  const [transferValues, setTransferValues] = useState({
    destinyAccount: '',
    amount: ''

  })
  const handleSubmit = async (values) => {
    const { destinyAccount, amount } = values
    const userData = {
      destinyAccount,
      amount
    }

    try {
      setTransferValues(values)
      const token = window.localStorage.getItem('token')
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
      await axios.post('https://s13-21-ft-java.onrender.com/api/v1/transfer', userData)
      console.log(userData)
    } catch (error) {
      console.error('Error al guardar usuario:', error)
    }
  }

  const validationSchema = Yup.object().shape({
    destinyAccount: Yup.string().required('El Número de cuenta es requerido'),
    amount: Yup.number().required('La cantidad es requerida').min(0, 'La cantidad debe ser mayor que 0')
  })

  return (
    <div className='flex flex-col px-8'>
      <div className='flex gap-3'>
        <Link to='/DashboardUser' className='pt-3 xl:hidden'>
          <FaArrowLeft />
        </Link>
        <div>
          <h1 className='font-bold text-2xl'>Transferencia</h1>
        </div>
      </div>
      <Formik
        className=''
        initialValues={transferValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, values }) => (
          <Form className='rounded pt-6 h-[280px] xl:h-[240px]'>
            {/* Form inputs */}
            {/* <FormInput name='Alias' type='text' placeholder='Juain' errors={errors} id='alias' value={values.alias} /> */}
            <FormInput name='Cuenta' type='string' placeholder='WL24247882' errors={errors} id='destinyAccount' value={values.destinyAccount} />
            <FormInput name='Cantidad' type='number' placeholder='300.00' errors={errors} id='amount' value={values.amount} />
            {/* Submit button */}
            <div className='flex flex-col justify-center pt-[270px] xl:pt-[136px]'>
              <input
                type='submit'
                onClick={handleModalOpen}
                className='bg-black text-white xl:bg-black xl:border-lime-400 disabled:bg-gray-400 cursor-pointer text-sm border border-gray-700 font-semibold mt-3 py-4 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full'
                value='Transferir'
              />
              <Modal titulo='Transferencia Realizada' texto='Operación Exitosa!' isOpen={modalOpen} closeModal={handleModalClose} />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
