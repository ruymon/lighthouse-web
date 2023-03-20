import 'react-modern-drawer/dist/index.css';
import { ImageUploader } from '../ImageUploader';

export function NewEvent() {
  return (
    <div className='w-full h-full flex flex-col gap-8 py-2'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-xl font-semibold text-slate-700'>Novo evento</h1>
        <hr />
      </div>

      <div className='flex flex-col gap-3'>
        <label htmlFor="title">Título <span className='text-red-500'>*</span></label>
        <input type="text" id="title" placeholder='Escreva aqui o título aqui...' />
      </div>

      <ImageUploader label='Adicionar imagem de banner' onChange={(e) => console.log(e.target.files)} />

      <div className='flex flex-col gap-3'>  
        <label htmlFor="description">Descrição <span className='text-red-500'>*</span></label>
        <textarea id="description" placeholder='Escreva a descrição do evento aqui' />
      </div>

      <div className='flex flex-col gap-3'>
        <label htmlFor="date">Data <span className='text-red-500'>*</span></label>
        <input type="date" id="date" />
      </div>




    </div>
  )
}