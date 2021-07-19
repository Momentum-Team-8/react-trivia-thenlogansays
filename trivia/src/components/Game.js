import { useEffect, useState } from 'react'
import { getQuestionsByCategory } from './apis'
import { QuestionCard } from './QuestionCard'
import { Score } from './Score'
import { Next } from './Next'
import { handleRefresh } from './Refresh'

export const Game = (props) => {
  const { selectedCategory } = props
  const [questByCat, setQuestByCat] = useState([])
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0)
  const [done, setDone] = useState(false)
  const [score, setScore] = useState(0)

  useEffect(() => {
    const idx = currentQuestionIdx
    if (idx > 0 && idx === questByCat.length - 1) {
      setDone(true)
    }
  }, [currentQuestionIdx, questByCat])

  useEffect(() => {
    getQuestionsByCategory(selectedCategory).then((data) => {
      setQuestByCat(data)
    })
  }, [selectedCategory])

  const incrementScore = () => {
    setScore(score + 1)
  }

  if (done) {
    return <Score numQuestions={questByCat.length} score={score} />
  }

  return (
    <div className='questions'>
      {questByCat.length > 0 && (
        <>
          <button
            className='Back'
            onClick={handleRefresh}
          >
            Go Back to Categories
          </button>
          <QuestionCard
            question={questByCat[currentQuestionIdx]}
            incrementScore={incrementScore}
          >
            <Next
              setCurrentQuestionIdx={() =>
                setCurrentQuestionIdx(currentQuestionIdx + 1)}
            />
          </QuestionCard>
        </>
      )}
    </div>
  )
}
