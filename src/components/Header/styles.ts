import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.bg};
  background-image: linear-gradient(
    rgba(21, 98, 175, 0.01),
    rgba(21, 98, 175, 0.14)
  );
  height: 296px;
`
