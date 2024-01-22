import { InputHTMLAttributes } from 'react'
import * as S from './styles'

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <S.Input {...props} />
}
