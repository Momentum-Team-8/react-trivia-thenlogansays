export default function CategoryList ({ categories, setChosenCategory }) {
  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category, idx) =>
          <li key={idx}>{category.name}</li>
        )}
      </ul>
    </div>
  )
}
