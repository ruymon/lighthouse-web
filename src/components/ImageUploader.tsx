import { ChangeEventHandler, useRef, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import imagePlaceholder from '../assets/image-placeholder.svg';
import { ONE_MB } from '../constants/files';

interface ImageUploaderProps {
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export function ImageUploader({ label, onChange }: ImageUploaderProps) {
  const fileUpload = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<File | undefined>(undefined);
  const [ imageDataUrl, setImageDataUrl ] = useState<string | undefined>(undefined);

  const handleFileUploadClick = () => {
    if (fileUpload.current) {
      fileUpload.current.click();
    }
  }

  const handleImageChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const file = event.currentTarget?.files?.[0];

    if (file) {
      const reader = new FileReader();
      
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImageDataUrl(reader.result as string);
      };
      
      setImage(file);
    }
  }

  const handleFileRemove = () => {
    setImage(undefined);
    setImageDataUrl(undefined);
  }

  const isFileTooLarge = (file: File) => {
    return file.size > ONE_MB;
  };

  return (
    image ? (
      <div className='flex gap-4 items-center justify-between p-3 bg-slate-100 text-slate-400 font-medium rounded-md'>
        <div className='flex gap-4 items-center'>
          { imageDataUrl ? <img src={imageDataUrl} alt="Image" className='w-10 object-fill rounded aspect-square' /> : <div className='w-10 aspect-square bg-slate-300 rounded animate-pulse'></div>}
          
          <div className='flex flex-col'>
              <span className='text-sm font-medium text-slate-700'>{image.name}</span>
              { isFileTooLarge(image) ? <span className='text-xs font-medium text-red-400'>{image.size} bytes - Acima do limite de 1MB!</span> : <span className='text-xs font-medium text-slate-500'>{image.size} bytes</span> }            
          </div>
         </div>

        <button className='text-xs p-1 px-2 gap-2 rounded flex items-center hover:text-white hover:bg-red-400 transition-all' onClick={handleFileRemove}>
          <IoClose />
          <span>Remover</span>
        </button>

      </div>
    )
    : (
      <button type = "button" onClick = { handleFileUploadClick } className = 'flex flex-col gap-2 items-center justify-center p-8 bg-slate-50 hover:bg-slate-100 transition-all text-slate-400 font-medium rounded cursor-pointer'>
        <img src = { imagePlaceholder } alt = "Image placeholder" />
        <label htmlFor="title">{label}</label>
        <input type="file" accept='image/jpeg, image/jpg, image/png, image/gif' ref={fileUpload} onChange={handleImageChange} id='fileUpload' className='hidden' />
      </button >
    )
  );
};
