import React from "react";

const Preview = (userQuestions) => {
  console.log(userQuestions)
  return (
    <div>
      <h1>Preview:</h1>
      <p>{userQuestions[0].question.question}</p>
    </div>
  )
}

export default Preview