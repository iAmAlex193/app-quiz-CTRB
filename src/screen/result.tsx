import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import useScore from '../assets/hooks/useScore';
import Button from '../components/button';

export default function Result() {
  const [nickname, setNickname] = useState('');
  const { currentScore, handleAddScoreToListScores } = useScore();
  const { hitsQuestion, allQuestion } = useParams();
  const navigate = useNavigate();

  // Actions
  const handleRegisterScore = (): void => {
    if (!currentScore) return;

    handleAddScoreToListScores(currentScore.getScorePts(), nickname);

    navigate('/', { replace: true });
  }

  useEffect(() => {
    if (!currentScore) navigate('/', { replace: true });
  }, []);

  // Atualiza o nickname com o valor do currentScore quando o componente é montado
  useEffect(() => {
    if (!currentScore) return;

    setNickname(currentScore.getNickname());
  }, []);

  return (
    <>
      <h3 className='text-[22px] font-semibold text-center mb-4'> 
        🎉🎉Parabéns 🎉🎉 
      </h3>

      <p className='text-lg text-center mb-4'> 
        {hitsQuestion}/{allQuestion} 
      </p>

      <form className='flex flex-col sm:flex-row items-end gap-2 mx-auto p-2 w-full max-w-[430px]'>
        <input 
          type='text' 
          placeholder='Digite seu nickname...' 
          className='shadowCustom bg-white border-[#00000014] rounded-[10px] p-2 w-full transition-all'
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />

        <Button 
          large 
          onClick={handleRegisterScore}
        >
          Registrar
        </Button> 
      </form>
    </>
  );
}
