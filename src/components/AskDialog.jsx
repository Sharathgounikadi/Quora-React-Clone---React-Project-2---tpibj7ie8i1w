import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const AskDialog = ({ questions, setQuestions }) => {
  const [questionInput, setQuestionInput] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const updateQuestion = [...questions]
    if (user?.islogged) {
      updateQuestion.push({
        id: +questions[questions.length - 1].id + +1,
        questionedBy: user?.username,
        question: questionInput
      })
      setQuestions(updateQuestion)
      localStorage.setItem('quesList', JSON.stringify(updateQuestion))
      setQuestionInput('')
      alert('Question added')
    }
    else {
      navigate('/login')
    }
  }
  return (
    <div className="add-question-container">
      <div className="add-question">
        <form action="#" method="post" onSubmit={handleSubmit} id="add-question-form">
          <div className="question-input relative">
            <label htmlFor="question" className="absolute left-6 text-lg font-bold">Question:</label>
            <input
              type="text"
              name="question"
              id="question"
              onChange={(e) => setQuestionInput(e.target.value)}
              placeholder="Type your question here.........."
              value={questionInput}
              minLength={8}
              required
              className="w-full h-12 pl-16 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="buttons absolute right-6 top-1/2 transform -translate-y-1/2 flex gap-4">
            <input
              type="reset"
              value="cancel"
              onClick={() => navigate("/")}
              className="py-2 px-4 text-lg font-semibold text-white bg-red-500 rounded hover:bg-red-600 cursor-pointer"
            />
            <input
              type="submit"
              value="Add question"
              className="py-2 px-4 text-lg font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default AskDialog