import { useState, createContext, type ReactNode } from 'react';
import QuizQuestion from '../assets/model/quiz/quizQuestion';
import QuizManager from '../assets/model/quiz/quizManager';

// Define a interface para o contexto
interface AnsweredQuestionI {
  questionRef: string;
  answer: string;
  isCorrect: boolean;
}
interface QuizContextPropsI {
  questions: QuizQuestion[];
  questionsAnswered: AnsweredQuestionI[];
  handleCreateAnsweredQuestion: () => void;
  handleUpdateAnsweredQuestion: (questionRef: string, answer: string, isCorrect: boolean) => void;
}

// Cria o contexto com os valores iniciais
export const QuizContext = createContext<QuizContextPropsI>({
  questions: [],
  questionsAnswered: [],
  handleCreateAnsweredQuestion: () => {},
  handleUpdateAnsweredQuestion: () => {},
});

export default function QuizProvider({ children }: { children: ReactNode }) {
  const [questions] = useState<QuizQuestion[]>(() => {
    const manager = new QuizManager([
      new QuizQuestion(
        'a18b0c4a-3524-42e4-a29a-0ca5dd69b78a',
        'Qual o material principal do sistema de drenagem?',
        'Material poroso',
        [
          'Metal pesado', 
          'Material poroso', 
          'Plástico liso',
        ]
      ),
      new QuizQuestion(
        '87f00f91-420a-43c4-bf9f-6ddb9d3a0551',
        'Para que serve o espaço oco (de 1cm a 2cm) criado pelo sistema de drenagem?',
        'Para armazenar a água excedente',
        [
          'Para fazer sombra para as plantas',
          'Para medir a temperatura',
          'Para armazenar a água excedente',
        ]
      ),
      new QuizQuestion(
        '9984e10c-f02a-4687-8c68-3f9da2aa7694',
        'Por onde a água armazenada é escoada aos poucos?',
        'Pelas calhas',
        [
          'Pelo chão da casa', 
          'Pela torneira', 
          'Pelas calhas',
        ]
      ),
    ]);

    return manager.getQuestionsRandom();
  });
  const [questionsAnswered, setQuestionsAnswered] = useState<AnsweredQuestionI[]>([]);

  // Actions
  // Só será chamada uma vez, quando o quiz iniciar
  const handleCreateAnsweredQuestion = (): void => {
    const answeredQuestions = questions.map((question) => ({
      questionRef: question.getId(),
      answer: '',
      isCorrect: false,
    }));
    
    setQuestionsAnswered(answeredQuestions);
  }
  // Será chamada sempre que uma questão for respondida
  const handleUpdateAnsweredQuestion = (questionRef: string, answer: string, isCorrect: boolean): void => {
    const copyQuestionsAnswered = [...questionsAnswered];

    copyQuestionsAnswered.forEach((item) => {
      if(item.questionRef === questionRef) {
        item.answer = answer;
        item.isCorrect = isCorrect;
      }
    });

    setQuestionsAnswered(copyQuestionsAnswered);
  }

  // Valores que serão disponibilizados no contexto
  const VALUES: QuizContextPropsI = {
    questions,
    questionsAnswered,
    handleCreateAnsweredQuestion,
    handleUpdateAnsweredQuestion,
  };

  return (
    <QuizContext.Provider value={VALUES}>
      {children}
    </QuizContext.Provider>
  );
}