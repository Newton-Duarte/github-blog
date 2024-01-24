import styled from 'styled-components'

type ContainerProps = {
  effect1: string
  effect2: string
}

export const Container = styled.header<ContainerProps>`
  position: relative;
  width: 100%;
  height: 296px;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    url(${(props) => props.effect1}) left center no-repeat,
    url(${(props) => props.effect2}) right center no-repeat;

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
