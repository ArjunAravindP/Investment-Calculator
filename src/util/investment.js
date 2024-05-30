// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInv: The initial investment amount
// - annualInv: The amount invested every year
// - expectedRtn: The expected (annual) rate of return
// - duration: The investment duration (time frame)
export function calculateInvestmentResults({ initialInv, annualInv, expectedRtn, duration }) {
  const annualData = []
  let investmentValue = initialInv

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedRtn / 100)
    investmentValue += interestEarnedInYear + annualInv
    annualData.push({
      year: i + 1, // year identifier
      interest: interestEarnedInYear, // the amount of interest earned in this year
      valueEndOfYear: investmentValue, // investment value at end of year
      annualInv: annualInv // investment added in this year
    })
  }

  return annualData
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
})
