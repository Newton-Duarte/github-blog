import logo from '../../assets/logo.svg'

import * as S from './styles'

export function Header() {
  return (
    <S.Container>
      <S.Overlay />
      <img src={logo} alt="" />
    </S.Container>
  )
}
