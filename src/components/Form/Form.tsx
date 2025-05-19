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
          <InputLabel label={ '€' } position='left' error={Boolean(formData.errors?.mortgageAmount)} />
          <input type="number" name="mortgageAmount" value={formData.mortgageAmount} onChange={(e) => handleInputChange(e)} id="mortgage-amount" className={`form__field p-left-4 ${formData.errors?.mortgageAmount && 'error'}`} />
        </div>
          {formData.errors?.mortgageAmount && <p className='error__message'>{formData.errors.mortgageAmount}</p>}
      </div>
      <div className="md">
        <div className="form__group">
          <label htmlFor="mortgage-term" className='form__label'>Mortgage Term</label>
          <div className="label__group">
            <InputLabel label={ 'years' } position='right' error={Boolean(formData.errors?.mortgageTerm)} />
            <input type="number" name="mortgageTerm" value={formData.mortgageTerm} onChange={(e) => handleInputChange(e)} id="mortgage-term" className={`form__field p-right-3 ${formData.errors?.mortgageTerm && 'error'}`} />
          </div>
          {formData.errors?.mortgageTerm && <p className='error__message'>{ formData.errors.mortgageTerm }</p>}
        </div>
        <div className="form__group">
          <label htmlFor="interest-rate" className='form__label'>Interest Rate</label>
          <div className="label__group">
            <InputLabel label={ '%' } position='right' error={Boolean(formData.errors?.interestRate)} />
            <input type="number" name="interestRate" value={formData.interestRate} onChange={(e) => handleInputChange(e)} id="interest-rate" className={`form__field p-right-3 ${formData.errors?.interestRate && 'error'}`} />
          </div>
          {formData.errors?.interestRate && <p className='error__message'>{ formData.errors.interestRate }</p>}
        </div>
      </div>
      <div className={"form__group"}>
        <fieldset>
          <legend className='form__label mb-1'>Mortgage Type</legend>
          <div className={`form__radio ${formData.mortgageType === 'repayment' ? 'checked' : ''}`}>
            <input type="radio" id="repayment" checked={formData.mortgageType === 'repayment'} value='repayment' onChange={(e) => handleInputChange(e)} name="mortgageType" className='form__radio-input' />
            <label htmlFor="repayment" className='form__radio-label'>Repayment</label>
          </div>
          <div className={`form__radio ${formData.mortgageType === 'interest-only' ? 'checked' : ''}`}>
            <input type="radio" id="interest-only" checked={formData.mortgageType === "interest-only"} value="interest-only" onChange={(e) => handleInputChange(e)} name="mortgageType" className='form__radio-input' />
            <label htmlFor="interest-only" className='form__radio-label'>Interest Only</label>
          </div>
          {formData.errors?.mortgageType && <p className='error__message'>{ formData.errors.mortgageType }</p>}
        </fieldset>
      </div>
        <button className='form__submit' type="submit">
          <img src="/images/icon-calculator.svg" alt="" />
          Calculate Repayments
        </button>
    </form>
  )
}
