import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme.post};
  cursor: pointer;
  border: 1px solid transparent;

  p {
    color: ${(props) => props.theme.text};
  }

  &:hover {
    border-color: ${(props) => props.theme.blue};
  }
`
export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 20px;

  h3 {
    font-size: 20px;
    color: ${(props) => props.theme.title};
  }

  span {
    color: ${(props) => props.theme.span};
    white-space: nowrap;
  }
`
