interface RepaymentDetails {
  monthlyPayment: number;
  totalRepayment: number;
}

export const calculateRepayments = (principal: number, rate: number, term: number): RepaymentDetails => { 
  const monthlyRate = rate / 100 / 12; 
  const numberOfPayments = term * 12; 
  
  // Monthly payment formula
  const monthlyPayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));

  const totalRepayment = monthlyPayment * numberOfPayments;
  
  return {monthlyPayment, totalRepayment};
 }