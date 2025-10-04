import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen'>
      <h2 className='font-medium mb-1'> 🫠 Página não encontrada 🫠 </h2>

      <Link to='/' className='text-[#0066ff] text-sm underline'>Volte aqui</Link>
    </div>
  );
}

