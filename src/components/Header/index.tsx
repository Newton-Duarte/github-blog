import logo from '../../assets/logo.svg'
import effect1 from '../../assets/effect1.svg'
import effect2 from '../../assets/effect2.svg'

import * as S from './styles'

export function Header() {
  return (
    <S.Container>
      <img src={effect1} alt="" />
      <img src={logo} alt="" />
      <img src={effect2} alt="" />
    </S.Container>
  )
}
