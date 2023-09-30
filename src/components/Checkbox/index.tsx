import React, { InputHTMLAttributes } from 'react'
import { Input, Label, Indicator } from './styles'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

function Checkbox({ value, checked, onChange, name, label }: CheckboxProps) {
  return (
    <Label>
      {label}
      <Input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <Indicator ischecked={checked ? 'true' : 'false'} />
    </Label>
  )
}

export default Checkbox
