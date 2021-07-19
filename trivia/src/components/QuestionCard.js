import React, { useState } from 'react'
import he from 'he'
import { AnswerOpt } from './AnswerOpt'

export const QuestionCard = (props) => {
  const { question, children, incrementScore } = props
  const [answered, setAnswered] = useState(false)
  const [correct, setCorrect] = useState(false)

  const commitAnswer = () => {
    if (correct) {
      incrementScore()
    }
    setAnswered(false)
  }

  return (
    <div>
      <p>{he.decode(question.question)}</p>
      <div>
        <ul>
          <AnswerOpt
            answers={{
              correctAnswer: question.correct_answer,
              incorrectAnswers: question.incorrect_answers
            }}
            checkAnswer={setCorrect}
            setAnswered={setAnswered}
          />
        </ul>
      </div>
      <div>
        {answered && (
          <>
            <div>
              {correct ? 'Right!' : 'Nope!'}
            </div>
            <div className='next'>
              {React.cloneElement(children, { commitAnswer: commitAnswer })}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
