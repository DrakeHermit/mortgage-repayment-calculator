import './InputLabel.scss'

interface InputLabelProps {
  label: string;
  position: 'left' | 'right';
}

export const InputLabel = ({label, position = 'left'}: InputLabelProps) => {
  return (
    <div className={`input__label input__label--${position}` }>{label}</div>
  )
}