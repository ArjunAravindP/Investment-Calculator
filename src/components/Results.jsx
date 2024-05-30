import { calculateInvestmentResults } from "../util/investment"
import { formatter } from "../util/investment"

export default function Results({ values }) {
  const investmentResults = calculateInvestmentResults(values)

  let totalIntrest = 0
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Intrest(Year)</th>
          <th>Total Intrest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentResults.map((row, index) => (
          <tr key={index}>
            <td>{row.year}</td>
            <td>{formatter.format(row.valueEndOfYear)}</td>
            <td>{formatter.format(row.interest)}</td>
            <td>{formatter.format((totalIntrest += row.interest))}</td>
            <td>{formatter.format(row.valueEndOfYear - totalIntrest)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
