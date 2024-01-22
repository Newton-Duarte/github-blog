import { PropsWithChildren } from 'react'

import * as S from './styles'
import { LinkProps, NavLink } from 'react-router-dom'

export function Link({ to, children }: PropsWithChildren & LinkProps) {
  return (
    <NavLink to={to}>
      <S.Link href="">{children}</S.Link>
    </NavLink>
  )
}
