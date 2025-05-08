import './FinalResult.scss'
import { useFormContext } from '../../hooks/useFormContext'
import { mortgageType } from '../../utils/mortgageType'
import { formatValue } from '../../utils/formatValue'

export const FinalResult = () => {
  const { formData } = useFormContext()
  const { monthlyRepayment, totalRepayment, monthlyPayment, totalRepaid } = mortgageType()

  return (
    <section>
      <h3 className='result__header'>Your results</h3>
      <p className='result__description'>Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
        <div className="green-accent"></div>
      <div className='result__container'>
        <h4>Your monthly repayments</h4>
        <p className='color__primary'>{formData.mortgageType === 'repayment' ? formatValue(monthlyRepayment ?? 0) : formatValue(monthlyPayment ?? 0)}</p>
        <hr />
        <h4>Total you'll repay over the term</h4>
        <p className='color__white'>{formData.mortgageType === 'repayment' ? formatValue(totalRepayment ?? 0) : formatValue(totalRepaid ?? 0)}</p>
      </div>
    </section>
  )
}