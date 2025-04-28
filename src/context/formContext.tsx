import { createContext, useState, ReactNode } from "react";

interface FormData {
  mortgageAmount: string;
  mortgageTerm: string;
  interestRate: string;
  mortgageType: string;
  isSubmitted?: boolean;
}

interface FormContextType {
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const FormContext = createContext<FormContextType>({} as FormContextType);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>({
    mortgageAmount: '',
    mortgageTerm: '',
    interestRate: '',
    mortgageType: 'repayment',
    isSubmitted: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
      setFormData((prevData) => ({
      ...prevData,
        [name]: value,
    }));
    
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setFormData((prevData) => ({ ...prevData, isSubmitted: true }));
    console.log(formData)
  }

  const value: FormContextType = { formData, handleInputChange, handleFormSubmit };

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  );
};