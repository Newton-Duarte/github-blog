import * as S from './styles'

export type CardProps = {
  title: string
  date: string
  description: string
}

export function Card({ title, date, description }: CardProps) {
  return (
    <S.Container>
      <S.Title>
        <h3>{title}</h3>
        <span>{date}</span>
      </S.Title>
      <p>{description}</p>
    </S.Container>
  )
}
