import styled from 'styled-components'
import { MOBILE_SIZE } from '../utils/media-query'

export const Container = styled.div`
  background-color: ${(props) => props.theme.profile};
  border-radius: 10px;
  padding: 2rem 2.5rem;
  margin-top: -8rem;
  display: flex;
  gap: 2rem;

  @media ${MOBILE_SIZE} {
    flex-direction: column;
  }
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.5rem;
`

export const Avatar = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
  margin: 0 auto;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: ${(props) => props.theme.title};
    font-size: 1.5rem;
  }

  @media ${MOBILE_SIZE} {
    flex-direction: column;

    h1 {
      text-align: center;
      margin-bottom: 1rem;
    }
  }
`

export const Description = styled.p`
  color: ${(props) => props.theme.text};

  @media ${MOBILE_SIZE} {
    text-align: center;
  }
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

  @media ${MOBILE_SIZE} {
    flex-direction: column;
  }
`
