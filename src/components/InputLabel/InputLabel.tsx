import './InputLabel.scss'

interface InputLabelProps {
  label: string;
  position: 'left' | 'right';
  error: boolean
}

export const InputLabel = ({label, position = 'left', error}: InputLabelProps) => {
  return (
    <div className={`input__label input__label--${position} ${error && 'error'}` }>{label}</div>
  )
}