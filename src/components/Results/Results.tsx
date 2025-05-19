import { useFormContext } from '../../hooks/useFormContext'
import { FinalResult } from '../FinalResult/FinalResult'
import './Results.scss'

export const Results = () => {
  const { formData } = useFormContext()
  
  return (
    <section className='results'>
      {formData.isSubmitted ? (
        <FinalResult />
      ) : (
        <div className='empty-state'>
          <img src="/images/illustration-empty.svg" alt="" />
          <h2>Results shown here</h2>
          <p>Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
        </div>
      )}
    </section>
  )
}