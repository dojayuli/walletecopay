import { Field, ErrorMessage } from 'formik'

export default function FormInput ({ id, name, type, placeholder, errors, value }) {
  const invalid = 'invalid:border-red-600 invalid:text-red-600 invalid:border-red-600 focus:invalid:ring-red-500'

  const normal = 'focus:outline-none  text-white'
  return (
    <div className='mb-2 h-[90px] w-full'>
      <label
        className='block text-white text-sm mb-2'
        htmlFor={id}
      >
        {name}
      </label>
      <Field
        className={`font-roboto shadow appearance-none border rounded w-full bg-[#434740] border-gray-800 py-3 px-3 leading-tight text-[0.8rem] lg:text-[1rem]
          ${errors ? invalid : normal}`}
        id={id}
        type={type}
        placeholder={placeholder}
        name={id}
        value={value || ''}
      />
      <ErrorMessage name={id} component='p' className='text-red-600 text-xs font-roboto' />
    </div>
  )
}
