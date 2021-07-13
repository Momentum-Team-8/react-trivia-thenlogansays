
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import CategoryList from './components/CategoryList'

const App = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    console.log('useEffect runs', categories)
    axios.get('https://opentdb.com/api_category.php')
      .then(res => setCategories(res.data.trivia_categories))
  })

  return (
    <div class='container'>
      <h1>Welcome to Trivia Night</h1>
      <h2>Grab a Drink and Select a Category to Begin</h2>
      <CategoryList categories={categories} />
    </div>
  )
}

export default App
