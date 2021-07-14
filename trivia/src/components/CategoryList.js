import React from 'react'

export function CategoryList ({ categories }) {
  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category, idx) => {
          return (
            <li key={idx}>
              {category.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
