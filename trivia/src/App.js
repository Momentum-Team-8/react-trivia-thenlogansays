
import React, { useState, useEffect } from 'react'
import { CategoryList } from './components/CategoryList'
import { Game } from './components/Game'
import { getCategoryList } from './components/apis'

const App = () => {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    getCategoryList().then((data) => setCategories(data))
  }, [])

  return (
    <div className='container'>
      <h1>Welcome to Trivia Night</h1>
      <h2>Grab a Drink and Select a Category to Begin</h2>
      {selectedCategory
        ? (<Game
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
           />)
        : (<CategoryList
            categories={categories}
            setSelectedCategory={setSelectedCategory}
           />
          )}
    </div>
  )
}

export default App
