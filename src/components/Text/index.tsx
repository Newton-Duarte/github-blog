import { PropsWithChildren } from 'react'
import * as S from './styles'

export function Text({ children, ...rest }: PropsWithChildren) {
  return <S.Text {...rest}>{children}</S.Text>
}
