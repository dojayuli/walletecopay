import { Link, useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { CountrySelect, FormButton, FormInput } from '../../../components'
import { FaArrowLeft } from 'react-icons/fa'
import { GoPencil } from 'react-icons/go'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function UsersDataFormInfo () {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    noIdentidad: '',
    birthday: '',
    phone: '',
    country: ''
  })

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = window.localStorage.getItem('token')
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        const response = await axios.get('https://s13-21-ft-java.onrender.com/api/v1/users')
        const userData = response.data
        if (userData) {
          setFormValues({
            firstName: userData.firstName || '',
            lastName: userData.lastName || '',
            noIdentidad: userData.noIdentidad || '',
            birthday: userData.birthday || '',
            phone: userData.phone || '',
            country: userData.country || ''
          })
        }
        setLoading(false)
        console.log(userData)
        console.log(formValues)
      } catch (error) {
        console.error('Error al guardar usuario:', error)
        setLoading(false)
      }
    }
    fetchUser()
  }, [])

  if (loading) {
    return <div className='text-xl pt-4'>Cargando información...</div>
  }

  // Validaciones
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().min(3, 'Mínimo 3 caractares').max(20, 'Máximo 20 caracteres').required('Nombre requerido'),
    lastName: Yup.string().min(3, 'Mínimo 3 caractares').max(20, 'Máximo 20 caracteres').required('Apellido requerido'),
    birthday: Yup.date().required('Fecha requerida'),
    phone: Yup.number().min(6, 'Mínimo 6 caractares').required('Teléfono requerido'),
    country: Yup.string().required('País requerido'),
    noIdentidad: Yup.number().min(6, 'Mínimo 6 caractares').required('Número de documento requerido')
  })

  const handleSubmit = async (values) => {
    const { firstName, lastName, noIdentidad, phone, birthday, country } = values
    const userData = {
      firstName,
      lastName,
      noIdentidad,
      birthday,
      phone,
      country
    }

    try {
      setFormValues(values)
      const token = window.localStorage.getItem('token')
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
      await axios.put('https://s13-21-ft-java.onrender.com/api/v1/user-update', userData)
      navigate('/DashboardUser')
      console.log(userData)
    } catch (error) {
      console.error('Error al guardar usuario:', error)
    }
  }

  const handleDelete = () => {
    navigate('/DashboardUser')
  }

  return (
    <section className='text-white rounded-xl xl:max-h-[550px] overflow-auto py-2'>
      <div className='flex items-center gap-3 self-start p-2'>
        <Link to='/DashboardUser'><FaArrowLeft /></Link>
        <h2 className='text-xl font-semibold'>Perfil</h2>
      </div>
      <div className='w-full flex flex-col h-full overflow-y-auto'>
        <Formik
          initialValues={formValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ errors, values }) => (
            <Form className='rounded flex flex-col justify-between px-6'>
              <div>
                <div className='flex items-center gap-2'>
                  <FormInput name='Nombres' type='text' placeholder='Juan Martin' errors={errors} id='firstName' value={values.firstName} />
                  <GoPencil className='bg-gradient-to-b from-[#3BC53F] to-[#B2FA5B] h-8 w-8 p-1 rounded-xl' />
                </div>
                <div className='flex items-center gap-2'>
                  <FormInput name='Apellidos' type='text' placeholder='López López' errors={errors} id='lastName' value={values.lastName} />
                  <GoPencil className='bg-gradient-to-b from-[#3BC53F] to-[#B2FA5B] h-8 w-8 p-1 rounded-xl' />
                </div>
                <div className='flex items-center gap-2'>
                  <FormInput name='Número de Documento de Identidad' type='tel' placeholder='0000000000' errors={errors} id='noIdentidad' value={values.noIdentidad} />
                  <GoPencil className='bg-gradient-to-b from-[#3BC53F] to-[#B2FA5B] h-8 w-8 p-1 rounded-xl' />
                </div>
                <div className='flex items-center gap-2'>
                  <FormInput name='Teléfono' type='tel' placeholder='(0000)00000000' errors={errors} id='phone' value={values.phone} />
                  <GoPencil className='bg-gradient-to-b from-[#3BC53F] to-[#B2FA5B] h-8 w-8 p-1 rounded-xl' />
                </div>
                <div className='flex items-center gap-2'>
                  <FormInput name='Fecha de Nacimiento' type='date' placeholder='00 ENE 0000' errors={errors} id='birthday' value={values.birthday} />
                  <GoPencil className='bg-gradient-to-b from-[#3BC53F] to-[#B2FA5B] h-8 w-8 p-1 rounded-xl' />
                </div>
                <div className='flex items-center gap-2'>
                  <CountrySelect name='Pais' errors={errors} id='country' />
                  <GoPencil className='bg-gradient-to-b from-[#3BC53F] to-[#B2FA5B] h-8 w-8 p-1 rounded-xl' />
                </div>
              </div>
              <div className='flex flex-col items-center pb-3'>
                <FormButton text='Guardar Datos' hover='hover:bg-primarygray' />
                <button onClick={handleDelete} className='m-3 text-center text-sm font-semibold text-red-600 hover:bg-red-600 hover:text-white rounded-lg py-2 px-4 w-full mb-16'>Eliminar Cuenta</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

    </section>
  )
}
