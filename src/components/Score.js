import { handleRefresh } from './Refresh'

export const Score = (props) => {
  const { numQuestions, score } = props

  return (
    <>
      <h2>
        You scored {score} out of {numQuestions}!
      </h2>
      <button onClick={handleRefresh}>Play Again?</button>
    </>
  )
}
