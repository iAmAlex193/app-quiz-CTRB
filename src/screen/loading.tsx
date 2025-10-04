import LoadingImg from '../assets/imgs/loading.svg';

export default function Loading() {
  return (
    <div className='fixed top-1/2 bottom-1/2 left-1/2 right-1/2 -translate-1/2 h-fit w-fit'>
      <div className='flex flex-col gap-3 justify-center items-center'>
        <img
          src={LoadingImg}
          alt='Loading...'
          className='animate-spin'
          height={40}
          width={40}
        />
        
        <span className='text-base font-medium'> Carregando </span>
      </div>
    </div>
  );
}