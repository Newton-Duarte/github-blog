import * as S from './styles'

export type CardProps = {
  title: string
  date: string
  description: string
  onClick(): void
}

export function Card({ title, date, description, onClick }: CardProps) {
  return (
    <S.Container onClick={onClick}>
      <S.Title>
        <h3>{title}</h3>
        <span>{date}</span>
      </S.Title>
      <p>{description}</p>
    </S.Container>
  )
}
