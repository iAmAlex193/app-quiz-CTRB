import { useState, createContext, type ReactNode } from 'react';
import Score from '../assets/model/score/score';
import ScoreManager from '../assets/model/score/scoreManager';

interface ScoreContextPropsI {
  listScores: Score[];
  currentScore: Score | null;
  handleAddScoreToListScores: (scorePts: number, nickname: string) => void;
  handleCreateCurrentScore: () => void;
  handleIncreaseCurrentScore: (scorePts: number) => void;
}

// Cria o contexto com os valores iniciais
export const ScoreContext = createContext<ScoreContextPropsI>({
  listScores: [],
  currentScore: new Score(2, 'Anônimo'),
  handleAddScoreToListScores: () => {},
  handleCreateCurrentScore: () => {},
  handleIncreaseCurrentScore: () => {}, 
});

export default function ScoreProvider({ children }: { children: ReactNode }) {
  const [listScores, setListScores] = useState<Score[]>(() => {
    const managerScores = new ScoreManager([]);

    return managerScores.getListScoreSortDesc();
  });
  const [currentScore, setCurrentScore] = useState<Score | null>(null);

  // Actions
  const handleAddScoreToListScores = (scorePts: number, nickname: string): void => {
    const score = new Score(scorePts, nickname);
    const managerScore = new ScoreManager([...listScores, score]);

    setListScores(managerScore.getListScoreSortDesc());
  }
  const handleCreateCurrentScore = (): void => {
    const score = new Score(0, 'Anônimo');

    setCurrentScore(score);
  }
  const handleIncreaseCurrentScore = (scorePts: number): void => {
    if (!currentScore) return;

    const newScore = new Score(scorePts, currentScore.getNickname());

    setCurrentScore(newScore);
  }

  const VALUES: ScoreContextPropsI = {
    listScores,
    currentScore,
    handleAddScoreToListScores,
    handleCreateCurrentScore,
    handleIncreaseCurrentScore,
  }

  return (
    <ScoreContext.Provider value={VALUES}>
      {children}
    </ScoreContext.Provider>
  );
}