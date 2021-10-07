import React, { useState } from 'react';
// import Preview from './Preview';


export default function FormBuilder() {

  let [question, setQuestion] = useState('')
  let [questionType, setQuestionType] = useState('')
  let [optionA, setOptionA] = useState('')
  let [optionB, setOptionB] = useState('')
  let [optionC, setOptionC] = useState('')

  const userQuestions = []

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
      question: {question},
      questionType: {questionType},
      optionA: {optionA},
      optionB: {optionB},
      optionC: {optionC},
    }
    userQuestions.push(userQuestion)
    console.log(userQuestions)
    // question = ''
    // questionType = ''
    // optionA = ''
    // optionB = ''
    // optionC = ''
    // Array.from(document.querySelectorAll('input')).forEach(
    //   input => (input.value = '')
    // )
  }

  return (
    <div>
      <h1>Form Builder</h1>
      {/* <p>{question}</p>
      <p>{questionType}</p> */}
      <form onSubmit={handleSubmit}>
        <label for="question">Question</label>
        <input type="text" placeholder="Your question..." id="question" value={question} onChange={handleQuestionChange} />
        <button className="text" value="text" onClick={handleClick}>Text</button>
        <button className="multiple-choice" value="multiple" onClick={handleClick}>Multiple Choice</button>
        {questionType === 'text' && (
          <input type="text" placeholder="The user's answer will go here" />
        )}
        {questionType === 'multiple' && (
          <div>
            <input type="radio" id="radio1"/>
            <label for="radio1">A.</label>
            <input type="text" placeholder="Answer A..." id="optionA" value={optionA} onChange={handleAChange}/>
            <input type="radio" id="radio2"/>
            <label for="radio2">B.</label>
            <input type="text" placeholder="Answer B..." id="optionB" value={optionB} onChange={handleBChange}/>
            <input type="radio" id="radio3"/>
            <label for="radio3">C.</label>
            <input type="text" placeholder="Answer C..." id="optionC" value={optionC} onChange={handleCChange}/>
          </div>
        )}
        <input type="submit" />
      </form>
      {/* <Preview userQuestions={userQuestions}/> */}
      <div>
      <h1>Preview:</h1>
      <div>{userQuestions.map((userQuestion) => {
              return userQuestion.question.question
            })}</div>
      </div>
      {/* <div>{userQuestions[0].questionType.questionType}</div> */}
    </div>
  )


}