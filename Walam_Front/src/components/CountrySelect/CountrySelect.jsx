import { Field, ErrorMessage } from 'formik'

export default function CountrySelect ({ id, name, errors }) {
  const invalid = 'invalid:border-red-600 invalid:text-red-600 invalid:border-red-600 focus:invalid:ring-red-500'
  const normal = 'focus:outline-none  text-white'

  return (
    <div className='mb-2 h-[90px] w-full'>
      <label className='block text-white text-sm mb-2' htmlFor={id}>{name}</label>
      <Field as='select' name={id} id={id} className={`block p-2 font-roboto shadow appearance-none border rounded w-full py-3 px-3 leading-tight text-xs bg-[#434740] border-gray-800 ${errors ? invalid : normal}`} errors={errors}>
        <option value=''>Selecciona un país</option>
        <option value='Argentina'>ARGENTINA</option>
        <option value='Colombia'>COLOMBIA</option>
        <option value='Mexico'>MÉXICO</option>
        <option value='Panama'>PANAMÁ</option>
        <option value='Costa_Rica'>COSTA RICA</option>
      </Field>
      <ErrorMessage name={id} component='p' className='text-red-600 text-xs font-roboto' />
    </div>
  )
}
