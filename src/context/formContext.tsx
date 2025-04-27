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
    const { name, value, type } = e.target;
    if (type === "radio") {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    } else {
      setFormData((prevData) => ({
      ...prevData,
        [name]: name === "mortgageAmount" || name === "mortgageTerm" || name === "interestRate" || name === "mortgage-type" ? value : prevData.mortgageType,
    }));
    }
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setFormData((prevData) => ({ ...prevData, isSubmitted: true }));
  }

  const value: FormContextType = { formData, handleInputChange, handleFormSubmit };

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  );
};