import QuizQuestion from './quizQuestion';

export default class QuizManager {
  private _questions: QuizQuestion[];

  constructor(questions: QuizQuestion[]) {
    this._questions = questions;
  }

  getQuestions(): QuizQuestion[] {
    return this._questions;
  }
  getQuestionsRandom(): QuizQuestion[] {
    return this._questions.sort(() => Math.random() - 0.5);
  }
}