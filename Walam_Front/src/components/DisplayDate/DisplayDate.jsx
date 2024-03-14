const formatDate = (dateString) => {
  const date = new Date(dateString)
  const day = date.getDate()
  const monthNames = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
  const monthIndex = date.getMonth()
  const year = date.getFullYear()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const formattedSecond = second < 10 ? `0${second}` : second

  const formattedDate = `${day} de ${monthNames[monthIndex]} de ${year} a las ${hour}:${minute}:${formattedSecond}`

  return formattedDate
}

const DisplayDate = ({ dateString }) => {
  return (
    <div className='text-center'>
      <p>Actualizado el {formatDate(dateString)}</p>
    </div>
  )
}

export default DisplayDate
