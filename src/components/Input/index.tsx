import React, { InputHTMLAttributes, useCallback } from 'react'

import { currency, phone } from '../../utils/masks'

import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask: 'cep' | 'currency' | 'phone'
  prefix?: string
}

function Input({ mask, prefix, ...props }: InputProps) {
  const handleKeyUp = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (mask === 'currency') {
        currency(e)
      }
      if (mask === 'phone') {
        phone(e)
      }
    },
    [mask],
  )

  return (
    <Container>
      {prefix && <span className="prefix-span">{prefix}</span>}
      <input className="mask-input" required {...props} onKeyUp={handleKeyUp} />
    </Container>
  )
}

export default Input
