import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 5,
  })

  function handleChange(userIdentifier, newValue) {
    setUserInput(previousValues => {
      return {
        ...previousValues,
        [userIdentifier]: +newValue
      }
    })
  }


  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {userInput.duration >= 1 ? <Results userInput={userInput} /> : <p className="center">Please enter duration more than Zero</p>}
    </>
  )
}

export default App
