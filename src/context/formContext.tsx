import { createContext, useState, ReactNode } from "react";
import { calculateRepayments } from "../utils/calculateRepayments";

interface FormData {
  mortgageAmount: string;
  mortgageTerm: string;
  interestRate: string;
  mortgageType: string;
  isSubmitted?: boolean;
  errors?: {
    mortgageAmount?: string;
    mortgageTerm?: string;
    interestRate?: string;
    mortgageType?: string;
  };
}

interface FormContextType {
  formData: FormData;
  focusedInput: string;
  setFocusState: (inputName: string) => void;
  handleInputBlur: () => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleClearForm: (e: React.MouseEvent<HTMLElement>) => void;
}

export const FormContext = createContext<FormContextType>({} as FormContextType);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>({
    mortgageAmount: '',
    mortgageTerm: '',
    interestRate: '',
    mortgageType: '',
    isSubmitted: false,
    errors: {
      mortgageAmount: '',
      mortgageTerm: '',
      interestRate: '',
      mortgageType: '',
    }
  });
  const [focusedInput, setFocusedInput] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setFormData((prevData) => ({
      ...prevData,
        [name]: value,
    }));
    
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const isValid = validateForm();
    if (isValid) {
      setFormData((prevData) => ({ ...prevData, isSubmitted: true }));
    calculateRepayments(
      parseFloat(formData.mortgageAmount), parseFloat(formData.interestRate), parseInt(formData.mortgageTerm))
    } else {
      setFormData((prevData) => ({ ...prevData, isSubmitted: false }));

    }
  }

  const handleClearForm = () => {
    setFormData({
      mortgageAmount: '',
      mortgageTerm: '',
      interestRate: '',
      mortgageType: '',
      isSubmitted: false,
    });
  }

  const validateForm = () => {
    const errors: FormData['errors'] = {};

    if (!formData.mortgageAmount) {
      errors.mortgageAmount = 'Mortgage amount is required';
    } else if (Number(formData.mortgageAmount) <= 0) {
      errors.mortgageAmount = 'Mortgage amount cannot be zero or negative';
    }

    if (!formData.mortgageTerm) {
      errors.mortgageTerm = 'Mortgage term is required';
    } else if (Number(formData.mortgageTerm) <= 0) {
      errors.mortgageTerm = 'Mortgage term cannot be zero or negative';
    }

    if (!formData.interestRate) {
      errors.interestRate = 'Interest rate is required';
    } else if (Number(formData.interestRate) <= 0) {
      errors.interestRate = 'Interest rate cannot be zero or negative';
    }

    if (!formData.mortgageType) {
      errors.mortgageType = 'Mortgage type is required';
    }
    
    setFormData((prevData) => ({
      ...prevData,
      errors: errors
    }));

    return !Object.values(errors).some((error) => error);
  }

  const setFocusState = (inputName: string) => {
    setFormData((prevData) => ({
      ...prevData,
      errors: {
        ...prevData.errors,
        [inputName]: undefined
      }
    }))

    setFocusedInput(inputName);
  }
  
  const handleInputBlur = () => {
    setFocusedInput('')
  }

  const value: FormContextType = { formData, handleInputChange, handleFormSubmit, handleClearForm, focusedInput, setFocusState, handleInputBlur };

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  );
};