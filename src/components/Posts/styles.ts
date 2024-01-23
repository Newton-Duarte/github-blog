import styled from 'styled-components'
import { MOBILE_SIZE } from '../utils/media-query'

export const Container = styled.div``

export const SearchForm = styled.div`
  margin-top: 4.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    h2 {
      color: ${(props) => props.theme.subtitle};
    }

    span {
      color: ${(props) => props.theme.span};
    }
  }

  form {
    input {
      width: 100%;
    }
  }
`

export const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2.5rem;

  @media ${MOBILE_SIZE} {
    grid-template-columns: 1fr;
  }
`
