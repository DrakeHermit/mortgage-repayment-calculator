import './InputLabel.scss'

interface InputLabelProps {
  label: string;
  position: 'left' | 'right';
  error: boolean
  isActive?: boolean;
}

export const InputLabel = ({label, position = 'left', error, isActive}: InputLabelProps) => {
  return (
    <div className={`input__label input__label--${position} ${isActive && !error ? 'active' : ''} ${error && 'error'}` }>{label}</div>
  )
}