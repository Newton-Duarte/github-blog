import styled from 'styled-components'

import { PostContent } from '../components/Posts/components/PostContent'
import { PostHeader } from '../components/Posts/components/PostHeader'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export function Post() {
  return (
    <Container>
      <PostHeader />
      <PostContent />
    </Container>
  )
}
