import React, { useState, useEffect } from 'react'
import { getQuestionsByCategory } from './api'

export function QuestionsByCategory (props) {
  const [questionsByCategory, setQuestionsbyCategory] = useState([])
  const [loading, setLoading] = useState(true)

  const { selectedCategory } = props


  useEffect(() => {
    getQuestionsByCategory(selectedCategory).then((data) => {
      setQuestionsbyCategory(data)
      setLoading(false)
    })
  }, [selectedCategory])

  return loading
    ? 'Questions Loading'
    : (
      <div>
        <h4>{selectedCategory.name} Quiz</h4>
        <ul>
          {questionsByCategory.map((data) =>{
            return (
              <div key={data.question}>
                <p>{data.question}?</p>
              </div>
            )
          })}
        </ul>
      </div>
      )
}
