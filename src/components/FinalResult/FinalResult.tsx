import './FinalResult.scss'

interface FinalResultProps {
  calculatedRepayments: number
}

export const FinalResult = ({calculatedRepayments}: FinalResultProps) => {
  
  return (
    <section>
      <h3 className='result__header'>Your results</h3>
      <p className='result__description'>Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
        <div className="green-accent"></div>
      <div className='result__container'>
        <h4>Your monthly repayments</h4>
        <p className='color__primary'>£{calculatedRepayments.toFixed(2)}</p>
        <hr />
        <h4>Total you'll repay over the term</h4>
        <p className='color__white'>£1,500</p>
      </div>
    </section>
  )
}