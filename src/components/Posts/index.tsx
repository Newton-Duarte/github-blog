import { NavLink } from 'react-router-dom'
import { Card } from '../Card'
import { Input } from '../Input'
import * as S from './styles'
import { GithubIssue } from '../../hooks/useFetchGithubIssues'
import { formatDistance } from 'date-fns'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import removeMarkdown from 'remove-markdown'

type PostsProps = {
  posts: GithubIssue[]
  onSearch(term: string): void
}

const searchSchema = z.object({
  query: z.string(),
})

type SearchInputs = z.infer<typeof searchSchema>

export function Posts({ posts, onSearch }: PostsProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchInputs>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      query: '',
    },
  })

  function handleSearchIssue(data: SearchInputs) {
    onSearch(data?.query)
  }

  return (
    <S.Container>
      <S.SearchForm>
        <div>
          <h2>Publicações</h2>
          <span>
            {posts?.length} {posts?.length > 1 ? 'publicações' : 'publicação'}
          </span>
        </div>
        <form onSubmit={handleSubmit(handleSearchIssue)}>
          <Input
            type="text"
            placeholder="Buscar conteúdo"
            disabled={isSubmitting}
            {...register('query')}
          />
        </form>
      </S.SearchForm>
      <S.Posts>
        {posts?.map((post) => (
          <NavLink key={post.id} to={`/post/${post.number}`} title={post.title}>
            <Card
              title={post.title}
              date={formatDistance(new Date(post.updated_at), new Date())}
              description={removeMarkdown(post.body?.substring(0, 120)).padEnd(
                125,
                '.',
              )}
            />
          </NavLink>
        ))}
      </S.Posts>
    </S.Container>
  )
}
