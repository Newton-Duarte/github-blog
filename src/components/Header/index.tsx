import logo from '../../assets/logo.svg'

import effect1 from '../../assets/effect1.svg'
import effect2 from '../../assets/effect2.svg'

import * as S from './styles'

export function Header() {
  return (
    <S.Container effect1={effect1} effect2={effect2}>
      <img src={logo} alt="" />
    </S.Container>
  )
}
