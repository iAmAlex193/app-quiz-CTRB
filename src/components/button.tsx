export default function Button({ 
  children, 
  type = 'button',
  variant = 'solid', 
  color = 'primary', 
  large, 
  sx,
  onClick,
}: any) {
  const loadClassName = () => {
    let defaultClass = `
      rounded-xl py-1.5 px-4 w-fit h-fit 
      cursor-pointer transition-all 
    `;

    if(variant == 'solid') defaultClass += ' shadowButton'
    if(variant == 'solid' && color == 'primary') defaultClass += ' bg-[#0066FF] text-white';
    if(variant == 'solid' && color == 'secondary') defaultClass += ' bg-[#FFC55C] text-[#323232]';
    
    if(variant == 'text' && color == 'primary') defaultClass += ' text-[#0066FF]';
    if(variant == 'text' && color == 'secondary') defaultClass += ' text-[#FFC55C]';
    if(variant == 'text' && color == 'danger') defaultClass += ' text-[#9F0F0F]';

    if(large) defaultClass += ' text-lg py-2 px-8';

    return defaultClass;
  }

  return (
    <button 
      type={type} 
      className={loadClassName()} 
      style={sx} 
      onClick={onClick}
    >
      {children}
    </button>
  );
}