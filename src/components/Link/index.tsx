import { PropsWithChildren } from 'react'

import * as S from './styles'

export function Link({ children }: PropsWithChildren) {
  return <S.Link href="">{children}</S.Link>
}
