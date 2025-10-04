import { BsTrophyFill, BsAward } from 'react-icons/bs';
import useScore from '../../assets/hooks/useScore';
import styles from './leaderboard.module.css';

export default function Leaderboard() {
  const { listScores } = useScore();

  // Render
  const renderPlayerScoreOnTable = () =>
    listScores.map((dataPlayer, index) => (
      <tr key={index}>
        <td>
          <BsTrophyFill className={styles.icon} />
          {index + 1}° {dataPlayer.getNickname()}
        </td>

        <td>
          {dataPlayer.getScorePts()}pts
          <BsAward className={styles.icon} />
        </td>
      </tr>
    ));

  return (
    <table>
      <thead>
        <tr>
          <th> Jogador </th>
          <th> Pontuação </th>
        </tr>
      </thead>

      <tbody>{renderPlayerScoreOnTable()}</tbody>
    </table>
  );
}
