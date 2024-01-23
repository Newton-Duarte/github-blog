import Markdown from 'react-markdown'

import * as S from './styles'

type PostContentProps = {
  content: string
}

export function PostContent({ content }: PostContentProps) {
  return (
    <S.Container>
      <Markdown>{content}</Markdown>
    </S.Container>
  )
}
