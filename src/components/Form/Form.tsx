import './Form.scss'

export const Form = () => {
  return (
    <form>
      <div className="form__group">
        <label htmlFor="mortgage-amount" className='form__label'>Mortgage Amount</label>
        <input type="text" id="mortgage-amount" className='form__field' />
      </div>
      <div className="form__group">
        <label htmlFor="mortgage-term" className='form__label'>Mortgage Term</label>
        <input type="text" id="mortgage-term" className='form__field' />
      </div>
      <div className="form__group">
        <label htmlFor="interest-rate" className='form__label'>Interest Rate</label>
        <input type="text" id="interest-rate" className='form__field' />
      </div>
      <div className="form__group">
        <label htmlFor="mortgage-type" className='form__label'>Mortgage Type</label>
        <div className="form__radio">
          <input type="radio" id="repayment" name="mortgage-type" value="repayment" className='form__radio-input' />
          <label htmlFor="repayment" className='form__radio-label'>Repayment</label>
        </div>
        <div className="form__radio">
          <input type="radio" id="interest-only" name="mortgage-type" value="interest-only" className='form__radio-input' />
          <label htmlFor="interest-only" className='form__radio-label'>Interest Only</label>
        </div>
      </div>
      <div className="form__submit">
        <img src="/images/icon-calculator.svg" alt="" />
        <input type="button" value="Calculate Repayments" />
      </div>
    </form>
  )
}