import Score from './score'

export default class ScoreManager {
  private _listScore: Score[];

  constructor(score: Score[]) {
    this._listScore = score;
  }

  getListScore(): Score[] {
    return this._listScore;
  }
  getListScoreSortDesc(): Score[] {
    return this._listScore.sort((a, b) => b.getScorePts() - a.getScorePts());
  }
}