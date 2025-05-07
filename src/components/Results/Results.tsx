import { useFormContext } from '../../hooks/useFormContext'
import { calculateRepayments } from '../../utils/calculateRepayments'
import { FinalResult } from '../FinalResult/FinalResult'
import './Results.scss'

export const Results = () => {
  const { formData } = useFormContext()
  const {monthlyPayment, totalRepayment} = calculateRepayments(
    parseFloat(formData.mortgageAmount), parseFloat(formData.interestRate), parseInt(formData.mortgageTerm))
  
  return (
    <section className='results'>
      {formData.isSubmitted ? (<FinalResult calculatedRepayments={monthlyPayment} totalRepayment={totalRepayment} />) :
        (
          <>
            <img src = "/images/illustration-empty.svg" alt = "" />
            <h2 className='results__title'>Results shown here</h2>
            <p>Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>)
          </>
        )
}
    </section>
  )
}