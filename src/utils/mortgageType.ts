import { calculateRepayments } from "./calculateRepayments"
import { calculateInterestOnly } from "./calculateInterestOnly"
import { useFormContext } from "../hooks/useFormContext"

export const mortgageType = () => {
  const {formData} = useFormContext()

  if (formData.mortgageType === 'repayment') {
    const { monthlyRepayment, totalRepayment } = calculateRepayments(parseFloat(formData.mortgageAmount), parseFloat(formData.interestRate), parseInt(formData.mortgageTerm))
  
    return {monthlyRepayment, totalRepayment}
  } else {
    const { monthlyPayment, totalRepaid } = calculateInterestOnly(parseFloat(formData.mortgageAmount), parseFloat(formData.interestRate), parseInt(formData.mortgageTerm))

    return {monthlyPayment, totalRepaid}
  }
}