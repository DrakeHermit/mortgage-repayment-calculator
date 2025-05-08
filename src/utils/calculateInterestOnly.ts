interface InterestOnlyDetails {
  monthlyPayment: Number,
  totalRepaid: Number
}

export const calculateInterestOnly = (principal: number, rate: number, termYears: number): InterestOnlyDetails => {
  const monthlyRate = rate / 100 / 12
  const monthlyPayment = principal * monthlyRate

  const totalInterest = monthlyPayment * (termYears * 12)
  const totalRepaid = totalInterest + principal

  return {monthlyPayment, totalRepaid}
}