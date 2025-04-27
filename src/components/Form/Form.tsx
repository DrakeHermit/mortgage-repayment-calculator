import './Form.scss'
import { useFormContext } from '../../hooks/useFormContext'
import { InputLabel } from '../InputLabel/InputLabel';

export const Form = () => {
  const { formData, handleInputChange, handleFormSubmit } = useFormContext();

  return (
    <form onSubmit={(e) => handleFormSubmit(e)} className='form'> 
      <div className="form__group">
        <label htmlFor="mortgage-amount" className='form__label'>Mortgage Amount</label>
        <div className="label__group">
          <InputLabel label={ '$' } position='left' />
          <input type="number" name="mortgageAmount" value={formData.mortgageAmount} onChange={(e) => handleInputChange(e)} id="mortgage-amount" className='form__field' />
        </div>
      </div>
      <div className="form__group">
        <label htmlFor="mortgage-term" className='form__label'>Mortgage Term</label>
        <div className="label__group">
          <InputLabel label={ 'Years' } position='right' />
          <input type="number" name="mortgageTerm" value={formData.mortgageTerm} onChange={(e) => handleInputChange(e)} id="mortgage-term" className='form__field' />
        </div>
      </div>
      <div className="form__group">
        <label htmlFor="interest-rate" className='form__label'>Interest Rate</label>
        <div className="label__group">
          <InputLabel label={ '%' } position='right' />
          <input type="number" name="interestRate" value={formData.interestRate} onChange={(e) => handleInputChange(e)} id="interest-rate" className='form__field' />
        </div>
      </div>
      <div className="form__group">
        <fieldset>
          <legend className='form__label'>Mortgage Type</legend>
          <div className="form__radio">
            <input type="radio" id="repayment" checked={formData.mortgageType === "repayment"} value='repayment' onChange={(e) => handleInputChange(e)} name="mortgageType" className='form__radio-input' />
            <label htmlFor="repayment" className='form__radio-label'>Repayment</label>
          </div>
          <div className="form__radio">
            <input type="radio" id="interest-only" checked={formData.mortgageType === "interest-only"} value="interest-only" onChange={(e) => handleInputChange(e)} name="mortgageType" className='form__radio-input' />
            <label htmlFor="interest-only" className='form__radio-label'>Interest Only</label>
          </div>
        </fieldset>
      </div>
        <button className='form__submit' type="submit">
          <img src="/images/icon-calculator.svg" alt="" />
          Calculate Repayments
        </button>
    </form>
  )
}