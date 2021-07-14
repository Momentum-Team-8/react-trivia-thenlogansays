
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { CategoryList } from './components/CategoryList'
//import QuestionsByCategory from './components/QuestionsByCategory'
import { getCategoryList } from './components/api'

const App = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategoryList().then((categories) => setCategories(categories))
  })

  return (
    <div className='container'>
      <h1>Welcome to Trivia Night</h1>
      <h2>Grab a Drink and Select a Category to Begin</h2>
      <CategoryList categories={categories} />
    </div>
  )
}

export default App
