import { useMemo } from 'react'
import he from 'he'
import shuffle from 'lodash/shuffle'

export const AnswerOpt = (props) => {
  const { answers, checkAnswer, setAnswered } = props
  const { correctAnswer, incorrectAnswers } = answers
  const shuffledAnswers = useMemo(
    () => shuffle([correctAnswer, ...incorrectAnswers]),
    [correctAnswer, incorrectAnswers]
  )

  const handleClick = (option) => {
    setAnswered(true)
    checkAnswer(correctAnswer === option)
  }

  return (
    <div>
      {shuffledAnswers.map((option, idx) => (
        <button
          className='buttons'
          key={option}
          onClick={() => handleClick(option)}
        >
          {he.decode(option)}
        </button>
      ))}
    </div>
  )
}
