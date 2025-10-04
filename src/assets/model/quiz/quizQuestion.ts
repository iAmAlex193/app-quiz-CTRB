export default class QuizQuestion {
  private _id: string;
  private _questionStatement: string;
  private _correctOption: string;
  private _options: string[];

  constructor(
    id: string,
    questionStatement: string,
    correctOption: string,
    options: string[]
  ) {
    this._id = id;
    this._questionStatement = questionStatement;
    this._correctOption = correctOption;
    this._options = options;
  }

  getId(): string {
    return this._id;
  }
  getQuestionStatement(): string {
    return this._questionStatement;
  }
  getCorrectOption(): string {
    return this._correctOption;
  }
  getOptions(): string[] {
    return this._options;
  }
  getOptionsRandom(): string[] {
    return this._options.sort(() => Math.random() - 0.5);
  }
}