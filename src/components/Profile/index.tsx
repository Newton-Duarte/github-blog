import githubImg from '../../assets/github.svg'
import companyImg from '../../assets/company.svg'
import followersImg from '../../assets/followers.svg'
import linkImg from '../../assets/link.svg'
import { Text } from '../Text'
import { GithubUser } from '../../hooks/useFetchGithubUser'

import * as S from './styles'

type ProfileProps = {
  user: GithubUser
}

export function Profile({ user }: ProfileProps) {
  return (
    <S.Container>
      <S.Avatar src={user.avatar_url} />
      <S.Content>
        <S.Header>
          <h1>{user.name}</h1>
          <a
            className="link"
            href={user.html_url}
            rel="noopener noreferrer"
            target="_blank"
          >
            Github
            <img src={linkImg} />
          </a>
        </S.Header>
        <Text>{user.bio}</Text>
        <S.Information>
          <div>
            <img src={githubImg} /> {user.login}
          </div>
          <div>
            <img src={companyImg} /> {user.company}
          </div>
          <div>
            <img src={followersImg} /> {user.followers} seguidores
          </div>
        </S.Information>
      </S.Content>
    </S.Container>
  )
}
