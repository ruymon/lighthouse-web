import 'react-modern-drawer/dist/index.css';

export function NewEvent() {
  return (
    <div className='w-full h-full flex flex-col gap-8'>
      <h1 className='text-xl font-semibold text-slate-700'>Novo evento</h1>
      <hr />

      <div className='flex flex-col'>
        <label htmlFor="title">Título <span className='text-red-500'>*</span></label>
        <input type="text" id="title" placeholder='Escreva aqui o título aqui...' />

      </div>
    </div>
  )
}