import { type CSSProperties } from 'react';
import { useNavigate } from 'react-router';
import useScore from '../assets/hooks/useScore';
import Leaderboard from '../components/leaderboard';
import Button from '../components/button';

// Styles
const textEmphssClassName = 'text-[#E86831] font-normal underline';
const buttonStartQuiz: CSSProperties = { alignSelf: 'end' };

export default function Home() {
  const { listScores } = useScore();
  const navigate = useNavigate();

  // Actions
  const handleRedirectToQuiz = (): Promise<void> | void => navigate('/quiz', { replace: true });

  // Render
  const handleLeaderboard = () =>
    listScores.length > 0 && (
      <div className='flex flex-col p-3'>
        <h4 className='text-xl sm:text-[26px] font-semibold mb-1'> Placar </h4>

        <Leaderboard />
      </div>
    );

  return (
    <>
      <div className='flex flex-col p-3'>
        <h4 className='text-xl sm:text-[26px] font-semibold mb-1'> Quiz - Telhado Verde </h4>

        <p className='text-base sm:text-[21px] font-light mb-2'>
          Você acha que <span className={textEmphssClassName}>sabe tudo</span> sobre telhados verdes? Descubra o
          quanto <span className={textEmphssClassName}>você realmente sabe</span> e aprenda algo novo com nosso
          quiz interativo. <span className={textEmphssClassName}>Desafie-se!</span>
        </p>

        <Button 
          large 
          sx={buttonStartQuiz} 
          onClick={handleRedirectToQuiz}
        >
          Iniciar
        </Button>
      </div>

      {handleLeaderboard()}
    </>
  );
}