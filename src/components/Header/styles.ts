import styled from 'styled-components'

import effect1 from '../../assets/effect1.svg'
import effect2 from '../../assets/effect2.svg'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${effect1}), url(${effect2});
  background-position: left, right;
  background-repeat: no-repeat, no-repeat;
  height: 296px;
  position: relative;
`

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(21, 98, 175, 0.14), rgba(21, 98, 175, 0.34));
`
