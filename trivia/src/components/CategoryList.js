import React from 'react'

export function CategoryList ({ categories }) {
  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category, idx) => {
          return (
            <li key={idx}>
              <button>
                {category.name}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
