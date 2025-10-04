export default class Score {
  private _scorePts: number;
  private _nickname: string;

  constructor(
    scorePts: number,
    nickname: string,
  ) {
    this._scorePts = scorePts;
    this._nickname = nickname;
  }

  getScorePts(): number {
    return this._scorePts;
  }

  getNickname(): string {
    return this._nickname;
  }
}