import { InputHTMLAttributes, forwardRef } from 'react'
import * as S from './styles'

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(function Input(props, ref) {
  return <S.Input {...props} ref={ref} />
})
