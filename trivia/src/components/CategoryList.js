import React from 'react'

export const CategoryList = (props) => {
  const { categories, setSelectedCategory } = props

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category, idx) => {
          return (
            <li key={idx}>
              <button className='button' onClick={() => setSelectedCategory(category)}>
                {category.name}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
