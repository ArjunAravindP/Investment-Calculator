import headerImage from "../assets/investment-calculator-logo.png"
export default function Header() {
  return (
    <header id="header">
      <img src={headerImage} alt="Ivestment logo" />
      <h1>React Investment Calculator</h1>
    </header>
  )
}
