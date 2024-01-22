import { Card } from '../Card'
import { Input } from '../Input'
import * as S from './styles'

export function Posts() {
  return (
    <S.Container>
      <S.SearchForm>
        <div>
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </div>
        <form>
          <Input placeholder="Buscar conteúdo" />
        </form>
      </S.SearchForm>
      <S.Posts>
        <Card
          title="JavaScript data types and data structures"
          date="Há 1 dia"
          description="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in "
          onClick={() => console.log('clicked')}
        />
        <Card
          title="JavaScript data types and data structures"
          date="Há 1 dia"
          description="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in "
          onClick={() => console.log('clicked')}
        />
        <Card
          title="JavaScript data types and data structures"
          date="Há 1 dia"
          description="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in "
          onClick={() => console.log('clicked')}
        />
      </S.Posts>
    </S.Container>
  )
}
