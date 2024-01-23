import styled from 'styled-components'

import { PostContent } from '../components/Posts/components/PostContent'
import { PostHeader } from '../components/Posts/components/PostHeader'
import { useFetchGithubIssueById } from '../hooks/useFetchGithubIssueById'
import { useParams } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export function Post() {
  const { issueNumber } = useParams()

  const { issue } = useFetchGithubIssueById({
    issueNumber: Number(issueNumber),
  })

  if (!issue) {
    return <p>Aguarde...</p>
  }

  return (
    <Container>
      <PostHeader issue={issue} />
      <PostContent content={issue?.body} />
    </Container>
  )
}
