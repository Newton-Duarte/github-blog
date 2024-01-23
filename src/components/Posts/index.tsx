import { NavLink } from 'react-router-dom'
import { Card } from '../Card'
import { Input } from '../Input'
import * as S from './styles'
import { GithubIssue } from '../../hooks/useFetchGithubIssues'
import { formatDistance } from 'date-fns'

type PostsProps = {
  posts: GithubIssue[]
}

export function Posts({ posts }: PostsProps) {
  return (
    <S.Container>
      <S.SearchForm>
        <div>
          <h2>Publicações</h2>
          <span>{posts?.length} publicações</span>
        </div>
        <form>
          <Input placeholder="Buscar conteúdo" />
        </form>
      </S.SearchForm>
      <S.Posts>
        {posts?.map((post) => (
          <NavLink key={post.id} to={`/post/${post.id}`} title={post.title}>
            <Card
              title={post.title}
              date={formatDistance(new Date(post.updated_at), new Date())}
              description={post.body}
            />
          </NavLink>
        ))}
      </S.Posts>
    </S.Container>
  )
}
