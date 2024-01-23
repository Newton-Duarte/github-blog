import githubImg from '../../../../assets/github.svg'
import calendarImg from '../../../../assets/calendar.svg'
import commentImg from '../../../../assets/comment.svg'
import linkImg from '../../../../assets/link.svg'
import chevronLeftImg from '../../../../assets/chevron-left.svg'

import * as S from './styles'
import { Link } from '../../../Link'
import { GithubIssue } from '../../../../hooks/useFetchGithubIssues'
import { formatDistance } from 'date-fns'

type PostHeaderProps = {
  issue: GithubIssue
}

export function PostHeader({ issue }: PostHeaderProps) {
  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <Link to="..">
            <img src={chevronLeftImg} />
            Voltar
          </Link>
          <a
            className="link"
            href={issue?.html_url}
            rel="noopener noreferrer"
            target="_blank"
          >
            ver no github
            <img src={linkImg} />
          </a>
        </S.Header>
        <h2>{issue?.title}</h2>
        <S.Information>
          <div>
            <img src={githubImg} /> {issue?.user?.login}
          </div>
          <div>
            <img src={calendarImg} />{' '}
            {issue
              ? formatDistance(new Date(issue?.updated_at), new Date())
              : ''}
          </div>
          <div>
            <img src={commentImg} /> {issue?.comments}{' '}
            {issue?.comments > 1 ? 'comentários' : 'comentário'}
          </div>
        </S.Information>
      </S.Content>
    </S.Container>
  )
}
