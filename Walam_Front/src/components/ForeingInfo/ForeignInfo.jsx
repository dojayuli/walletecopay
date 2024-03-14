export default function ForeignInfo ({ moneda, compra, venta }) {
  return (
    <div className='shadow-inner rounded-2xl mt-6 p-6 flex  items-center border-2 xl:border xl:rounded-xl bg-zinc-800 xl:shadow-md xl:outline-1 xl:border-neutral-700  w-[80%] gap-4'>
      <h2 className='w-[60%] '>
        {moneda}
      </h2>
      <div className='w-[30%] flex flex-col items-center'>
        <h3>Compra</h3>
        <p>{compra}</p>
      </div>
      <div className='flex flex-col items-center'>
        <h3>Venta</h3>
        <p>{venta}</p>
      </div>
    </div>
  )
}
