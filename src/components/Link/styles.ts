import styled from 'styled-components'

export const Link = styled.a`
  color: ${(props) => props.theme.blue};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  text-decoration: none;

  display: flex;
  gap: 0.5rem;

  &:not(:disabled):hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }
`
