import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"
import { calculateInvestmentResults } from "./util/investment"
import { useState } from "react"

function App() {
  const [values, setValues] = useState({
    initialInv: 10000,
    annualInv: 1200,
    expectedRtn: 6,
    duration: 10
  })
  const inputIsValid = values.duration >= 1
  function handleInputValues(inputIdentifier, newValue) {
    setValues(prevValues => {
      const updatedValues = { ...prevValues }
      updatedValues[inputIdentifier] = +newValue
      return updatedValues
    })
  }
  return (
    <>
      <Header />
      <UserInput values={values} onInputChange={handleInputValues} />
      {!inputIsValid && <h3 className="center">Enter a duration that is greater than 0</h3>}
      {inputIsValid && <Results values={values} />}
    </>
  )
}

export default App
