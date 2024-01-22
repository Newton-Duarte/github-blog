import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.profile};
  border-radius: 10px;
  padding: 2rem 2.5rem;
  margin-top: -10rem;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Avatar = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  h1 {
    color: ${(props) => props.theme.title};
    font-size: 1.5rem;
  }
`

export const Description = styled.p`
  color: ${(props) => props.theme.text};
`

export const Information = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`
