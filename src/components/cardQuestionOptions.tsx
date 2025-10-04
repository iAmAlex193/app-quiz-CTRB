type CardQuestionOptionsT = {
  optionPosition: number;
  optionsStament: string;
  correctOption: string;
  optionSelected?: string | null;
  optionIsSelected?: boolean;
  handleSelectOption: () => void;
}

const optionIndex = ['A', 'B', 'C', 'D'];

export default function CardQuestionOptions({ 
  optionPosition,
  optionsStament,
  correctOption,
  optionSelected,
  optionIsSelected = false,
  handleSelectOption,
}: CardQuestionOptionsT) {
  // Styles
  const classname = () => {
    let classnameText = `
      text-inherit text-[14px] text-start rounded-xl 
      cursor-pointer flex items-center gap-1.5 py-1 px-1.5 w-full 
      transition-all disabled:text-[#1010104d]
    `;

    if(!optionSelected) classnameText += ' hover:bg-[#f2f5f9]';
    
    if(optionSelected && optionsStament === correctOption) {
      classnameText += 'bg-[#5CC78C]';
      
      return classnameText.replace('disabled:text-[#1010104d]', 'disabled:text-[#003316]');
    }
      

    if(optionSelected && optionIsSelected) {
      if(optionsStament !== correctOption) {
        classnameText += 'bg-[#F0A6A6] text-[#4F1111]';
        
        return classnameText.replace('disabled:text-[#1010104d]', 'disabled:text-[#4F1111]');
      }
    }

    return classnameText;
  }

  return (
    <li className='w-full'>
      <button 
        className={classname()}
        disabled={Boolean(optionSelected)} 
        onClick={handleSelectOption}>
        <div className='shadowCustom border border-[#00000015] rounded-full flex justify-center items-center py-1.5 px-3'>
          {optionIndex[optionPosition]}
        </div>

        {optionsStament}
      </button>
    </li>
  );
}