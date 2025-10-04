import { useState, useEffect, type CSSProperties } from 'react';
import { useNavigate } from 'react-router'
import useQuiz from '../assets/hooks/useQuiz'
import useScore from '../assets/hooks/useScore';
import CardQuestion from '../components/cardQuestion';
import Toast from '../components/toast';
import Button from '../components/button';

const buttonFinalQuestionsStyle: CSSProperties = { alignSelf: 'center', margin: '0 auto', marginTop: '8px' }

export default function Quiz() {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('Todas as perguntas foram respondidas! Deseja finalizar o quiz?');
  const { questions, questionsAnswered, handleCreateAnsweredQuestion } = useQuiz();
  const { handleCreateCurrentScore, handleIncreaseCurrentScore } = useScore();
  const navigate = useNavigate();

  // Actions
  const handleOpenToast = () => setToastVisible(true);
  const handleCloseToast = () => setToastVisible(false);
  const handleFinishQuiz = () => {
    let totalScore = 0;

    questionsAnswered.forEach((answeredQuestion) => answeredQuestion.isCorrect && totalScore++);
    
    handleIncreaseCurrentScore(totalScore);

    navigate(`/result/${totalScore}/${questions.length}`, { replace: true });
  }

  // Render
  const renderCardQuestion = () => questions.map((question) => 
    <CardQuestion key={question.getId()} dataQuestion={question} />);

  // Iniciaza as questões e o score no contexto
  useEffect(() => {
    // Inicializa as questões respondidas no contexto
    handleCreateAnsweredQuestion();

    // Inicializa o score no contexto
    handleCreateCurrentScore();
  }, []);

  // Atualiza a mensagem do toast conforme as perguntas são respondidas
  useEffect(() => {
    let totalQuestionAnswered = 0;

    questionsAnswered.forEach((answeredQuestion) => answeredQuestion.answer && totalQuestionAnswered++);

    if(totalQuestionAnswered === questions.length) {
      setToastMessage(`Todas as perguntas foram respondidas! Deseja finalizar o quiz?`);
    }
    if(totalQuestionAnswered != questions.length) {
      setToastMessage(`
        Há ${questions.length - totalQuestionAnswered} perguntas 
        não respondidas! Deseja finalizar o quiz?
      `);
    }
  }, [questionsAnswered]);

  return (
    <>
      <Toast 
        title='Finalizar quiz'
        message={toastMessage}
        visible={toastVisible}
        onClose={handleCloseToast}
        onAction={handleFinishQuiz}
      />

      <Button 
        variant='text' 
        color='danger' 
        sx={{ alignSelf: 'end' }}
        onClick={handleOpenToast}
      >
        Finalizar quiz
      </Button>

      <div className='shadowCustom bg-white border-[#00000014] rounded-t-xl pt-[18px] flex flex-col flex-1'>
        {renderCardQuestion()}

        <Button 
          variant='text' 
          color='primary' 
          sx={buttonFinalQuestionsStyle}
          onClick={handleOpenToast}
        >
          Final das perguntas
        </Button>
      </div>
    </>       
  );
}