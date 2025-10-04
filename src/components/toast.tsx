import Button from './button';

type ToastT = {
  title: string;
  message: string;
  visible: boolean,
  onClose: () => void,
  onAction: () => void,
}

export default function Toast({ 
  title, 
  message, 
  visible, 
  onClose, 
  onAction, 
}: ToastT) {
  // Actions
  const handleToastConfirm = () => {
    onClose();

    setTimeout(() => onAction(), 250); 
  }

  return (
    <div className={`fixed left-0 right-0 p-3 h-fit transition-all ${!visible ? '-top-full' : 'top-[30px]'}`}>
      <div className='shadowToast bg-[#FFC55C] text-[#61430E] rounded-[18px] mx-auto py-1.5 px-4 w-fit'>
        <h3 className='text-lg font-semibold'> {title} </h3>

        <p> {message} </p>

        <div className='flex justify-between items-center gap-3.5 mt-3'>
          <Button 
            color='secondary' 
            sx={{ backgroundColor: 'rgba(97, 66, 14, .65)', color: '#fff' }} 
            onClick={onClose}> 
            Cancelar 
          </Button>
          
          <Button onClick={handleToastConfirm}> Confirmar </Button>
        </div>
      </div>
    </div>
  );
}