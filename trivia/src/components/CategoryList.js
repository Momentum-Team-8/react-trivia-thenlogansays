import React from 'react'

export const CategoryList = (props) => {
  const { categories, setSelectedCategory } = props

  return (
    <div>
      {categories.map((category) => {
        return (
          <div className='category' key={category.id}>
            <button
              className='button'
              onClick={() => setSelectedCategory(category)}
            >
              {category.name}
            </button>
          </div>
        )
      })}
    </div>
  )
}
