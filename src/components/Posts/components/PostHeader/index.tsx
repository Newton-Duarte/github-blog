import githubImg from '../../../../assets/github.svg'
import calendarImg from '../../../../assets/calendar.svg'
import commentImg from '../../../../assets/comment.svg'
import linkImg from '../../../../assets/link.svg'
import chevronLeftImg from '../../../../assets/chevron-left.svg'

import * as S from './styles'
import { Link } from '../../../Link'

export function PostHeader() {
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
            href="https://github.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            ver no github
            <img src={linkImg} />
          </a>
        </S.Header>
        <h2>JavaScript data types and data structures</h2>
        <S.Information>
          <div>
            <img src={githubImg} /> newton_duarte
          </div>
          <div>
            <img src={calendarImg} /> Há 1 dia
          </div>
          <div>
            <img src={commentImg} /> 32 seguidores
          </div>
        </S.Information>
      </S.Content>
    </S.Container>
  )
}
