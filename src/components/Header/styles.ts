import styled from 'styled-components'

import effect1 from '../../assets/effect1.svg'
import effect2 from '../../assets/effect2.svg'

export const Container = styled.header`
  position: relative;
  height: 296px;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    url(${effect1}) left center no-repeat,
    url(${effect2}) right center no-repeat;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      rgba(21, 98, 175, 0.14),
      rgba(21, 98, 175, 0.34)
    );
  }
`
