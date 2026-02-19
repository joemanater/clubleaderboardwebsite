import { getScoreColor } from '../../data/shared/scoring'
import './ScoreBar.css'

export default function ScoreBar({ label, score, max = 10 }) {
  const pct = (score / max) * 100
  const color = getScoreColor(score)

  return (
    <div className="score-bar">
      <div className="score-bar__header">
        <span className="score-bar__label">{label}</span>
        <span className="score-bar__value" style={{ color }}>{score}</span>
      </div>
      <div className="score-bar__track">
        <div
          className="score-bar__fill"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
    </div>
  )
}
