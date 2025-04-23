import { FinalResult } from '../FinalResult/FinalResult'
import './Results.scss'
import { useState } from 'react'


export const Results = () => {
  const [results, setResults] = useState(false)

  return (
    <section className='results'>
      {results ? (<FinalResult />) :
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