import React, { useState } from 'react';
// import Preview from './Preview';


export default function FormBuilder() {

  const [question, setQuestion] = useState('')
  const [questionType, setQuestionType] = useState('')
  const [optionA, setOptionA] = useState('')
  const [optionB, setOptionB] = useState('')
  const [optionC, setOptionC] = useState('')
  const [userQuestions, setUserQuestions] = useState([])

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value)
  }

  const handleAChange = (event) => {
    setOptionA(event.target.value)
  }

  const handleBChange = (event) => {
    setOptionB(event.target.value)
  }

  const handleCChange = (event) => {
    setOptionC(event.target.value)
  }

  const handleClick = (event) => {
    event.preventDefault()
    setQuestionType(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let userQuestion = {
      question: { question },
      questionType: { questionType },
      optionA: { optionA },
      optionB: { optionB },
      optionC: { optionC },
    }
    setUserQuestions(userQuestions => [...userQuestions, userQuestion])
    console.log(userQuestions)
    // console.log(userQuestions[0].question.question)
  }

  return (
    <div>
      <h1>Form Builder</h1>
      <div className="columns">
        <form onSubmit={handleSubmit}>
          <h2>Build your form:</h2>
          <label for="question">Question:</label>
          <input type="text" placeholder="Your question..." id="question" value={question} onChange={handleQuestionChange} />
          <div className="answer-choice">
            <label>Type of answer:</label>
            <button className="text" value="text" onClick={handleClick}>Text</button>
            <button className="multiple-choice" value="multiple" onClick={handleClick}>Multiple Choice</button>
            <div className="answer-preview-in-build">
              {questionType === 'text' && (
                <textarea id="text-answer" cols="40" rows="8" placeholder="The user's answer will go here"></textarea>
              )}
              {questionType === 'multiple' && (
                <div className="radio-buttons">
                  <div className="radioA">
                    <input type="radio" id="radio1" />
                    <label for="radio1">A.</label>
                    <input type="text" placeholder="Answer A..." id="optionA" value={optionA} onChange={handleAChange} />
                  </div>
                  <div className="radioB">
                    <input type="radio" id="radio2" />
                    <label for="radio2">B.</label>
                    <input type="text" placeholder="Answer B..." id="optionB" value={optionB} onChange={handleBChange} />
                  </div>
                  <div className="radioC">
                    <input type="radio" id="radio3" />
                    <label for="radio3">C.</label>
                    <input type="text" placeholder="Answer C..." id="optionC" value={optionC} onChange={handleCChange} />
                  </div>
                </div>
              )}
            </div>
          </div>
          <input type="submit" value="Save Question" className="save-button" />
        </form>
        <div className="preview">
          {/* <Preview userQuestions={userQuestions}/> */}
          <h2>Preview:</h2>
              <div>{userQuestions.map((userQuestion) => {
                return (
                  <div className="preview-whole-question">
                    <div><span className="underline">Question</span>: <span className="question-text">{userQuestion.question.question}</span></div>
                    <div>{userQuestion.questionType.questionType === 'text' && (
                      <textarea id="text-answer-preview" cols="37" rows="8"></textarea>
                    )}</div>
                    <div> {userQuestion.questionType.questionType === 'multiple' && (
                      <div className="radio-buttons">
                        <div className="radioA">
                          <input type="radio" id="radio1" />
                          <label for="radio1">A. {optionA} </label>
                        </div>
                        <div className="radioB">
                          <input type="radio" id="radio2" />
                          <label for="radio2">B. {optionB} </label>
                        </div>
                        <div className="radioC">
                          <input type="radio" id="radio3" />
                          <label for="radio3">C. {optionC} </label>
                        </div>
                      </div>
                    )}</div>
                  </div>
                )
              })}</div>
        </div>
      </div>
    </div>
  )

}