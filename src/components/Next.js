export const Next = (props) => {
  const { setCurrentQuestionIdx, commitAnswer } = props
  const handleClick = () => {
    setCurrentQuestionIdx()
    commitAnswer()
  }
  return (
    <div>
      <button
        onClick={handleClick}
      >
        Next Question
      </button>
    </div>
  )
}
