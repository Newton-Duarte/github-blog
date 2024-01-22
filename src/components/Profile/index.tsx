import githubImg from '../../assets/github.svg'
import companyImg from '../../assets/company.svg'
import followersImg from '../../assets/followers.svg'
import linkImg from '../../assets/link.svg'

import * as S from './styles'
import { Link } from '../Link'
import { Text } from '../Text'

export function Profile() {
  return (
    <S.Container>
      <S.Avatar src="https://github.com/newton-duarte.png" />
      <S.Content>
        <S.Header>
          <h1>Newton Duarte</h1>
          <Link>
            Github
            <img src={linkImg} />
          </Link>
        </S.Header>
        <Text>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </Text>
        <S.Information>
          <div>
            <img src={githubImg} /> newton_duarte
          </div>
          <div>
            <img src={companyImg} /> Rocketseat
          </div>
          <div>
            <img src={followersImg} /> 32 seguidores
          </div>
        </S.Information>
      </S.Content>
    </S.Container>
  )
}
