export const calculateRepayments = (principal: number, rate: number, term: number): number => { 
  const monthlyRate = rate / 100 / 12; 
  const numberOfPayments = term * 12; 
  
  // Monthly payment formula
  const monthlyPayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
  
  return monthlyPayment;
 }