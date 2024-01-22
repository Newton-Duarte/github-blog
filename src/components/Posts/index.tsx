import { NavLink } from 'react-router-dom'
import { Card } from '../Card'
import { Input } from '../Input'
import * as S from './styles'
import { GithubIssue } from '../../hooks/useFetchGithubIssues'

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
          <NavLink
            key={post.id}
            to={`/post/${post.html_url}`}
            title={post.title}
          >
            <Card
              title={post.title}
              date={post.updated_at}
              description={post.body}
            />
          </NavLink>
        ))}
      </S.Posts>
    </S.Container>
  )
}
