import React from 'react'
import styled from 'styled-components'

type InputProps = React.HTMLAttributes<HTMLInputElement>

export const Input = styled.input<InputProps>`
  height: 48px;
  border-radius: 6px;
  padding: 0.75rem 1rem;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.input};
  border: 1px solid ${(props) => props.theme.border};

  &::placeholder {
    color: ${(props) => props.theme.label};
  }

  &:disabled {
    cursor: not-allowed;
  }
`
