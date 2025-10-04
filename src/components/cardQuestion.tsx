import { useState, useEffect } from 'react';
import useQuiz from '../assets/hooks/useQuiz';
import QuizQuestion from '../assets/model/quiz/quizQuestion';
import CardQuestionOptions from './cardQuestionOptions';

export default function CardQuestion({ dataQuestion }: { dataQuestion: QuizQuestion }) {
  // getOptionsRandom() não pode ser chamado diretamente no renderCardOptions()
  // pois embaralha as opções a cada opção selecionada
  const [listOptionRandom] = useState<string[]>(() => dataQuestion.getOptionsRandom());
  const [optionSelected, setOptionSelected] = useState<string | null>(null);
  const { handleUpdateAnsweredQuestion } = useQuiz();

  // Actions
  const handleSelectOption = (option: string): void => {  
    if(!optionSelected) {
      setOptionSelected(option);
    }
  }

  // Render
  const renderCardOptions = () => listOptionRandom.map((option, index) => 
    <CardQuestionOptions 
      key={index} 
      optionPosition={index} 
      optionsStament={option} 
      correctOption={dataQuestion.getCorrectOption()}
      optionSelected={optionSelected}
      optionIsSelected={optionSelected === option}
      handleSelectOption={() => handleSelectOption(option)}
    />);

  // Atualiza a questão respondida no contexto sempre que uma opção for selecionada
  useEffect(() => {
    // Não pode ser passada em renderCardOptions devido 
    // a problemas de tempo de sincronização de estados
    handleUpdateAnsweredQuestion(
      dataQuestion.getId(), 
      optionSelected || '', 
      dataQuestion.getCorrectOption() === optionSelected
  );
  }, [optionSelected]);

  return (
    <div className='border-b border-b-[#0000003f] flex flex-col gap-1.5 p-3 w-full'>
      <h3 className='text-lg font-semibold'> 
        {dataQuestion.getQuestionStatement()} 
      </h3>

      <ol className='list-none h-fit'>
        {renderCardOptions()}
      </ol>
    </div>
  );
}