import './FinalResult.scss'
import { useFormContext } from '../../hooks/useFormContext'
import { mortgageType } from '../../utils/mortgageType'
import { formatValue } from '../../utils/formatValue'

export const FinalResult = () => {
  const { formData } = useFormContext()
  const { monthlyRepayment, totalRepayment, monthlyPayment, totalRepaid } = mortgageType()

  return (
    <div className='results-content'>
      <h3>Your results</h3>
      <p className='description'>Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.</p>
      <div className='results-box'>
        <h4>Your monthly repayments</h4>
        <p className='amount primary'>{formData.mortgageType === 'repayment' ? formatValue(monthlyRepayment ?? 0) : formatValue(monthlyPayment ?? 0)}</p>
        <hr />
        <h4>Total you'll repay over the term</h4>
        <p className='amount secondary'>{formData.mortgageType === 'repayment' ? formatValue(totalRepayment ?? 0) : formatValue(totalRepaid ?? 0)}</p>
      </div>
    </div>
  )
}