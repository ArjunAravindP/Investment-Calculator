export default function UserInput({ values, onInputChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" required value={values.initialInv} onChange={event => onInputChange("initialInv", event.target.value)}></input>
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number" required value={values.annualInv} onChange={event => onInputChange("annualInv", event.target.value)}></input>
        </p>
        <p>
          <label>Expected Returns</label>
          <input type="number" required value={values.expectedRtn} onChange={event => onInputChange("expectedRtn", event.target.value)}></input>
        </p>
        <p>
          <label>Duration</label>
          <input type="number" required value={values.duration} onChange={event => onInputChange("duration", event.target.value)}></input>
        </p>
      </div>
    </section>
  )
}
