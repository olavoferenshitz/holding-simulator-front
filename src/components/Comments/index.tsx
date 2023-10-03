import { Star } from 'phosphor-react'
import { useInView } from 'react-intersection-observer'
import {
  Container,
  CommentCard,
  TitleWrapper,
  PictureContainer,
  Title,
  Comment,
} from './styles'
import { Picture } from '../Picture'
import { comments } from '../../utils/initial-values'

export function Comments() {
  const [commentsContainerRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
    <Container ref={commentsContainerRef}>
      {inView && (
        <>
          {comments.map((coment, index) => (
            <CommentCard key={index}>
              <TitleWrapper>
                <PictureContainer>
                  <Picture imageSrc={coment.imgUrl} />
                </PictureContainer>
                <div>
                  <Title>{coment.nome}</Title>
                  <Star size={12} color="#f7b704" weight="fill" />
                  <Star size={12} color="#f7b704" weight="fill" />
                  <Star size={12} color="#f7b704" weight="fill" />
                  <Star size={12} color="#f7b704" weight="fill" />
                  <Star size={12} color="#f7b704" weight="fill" />
                </div>
              </TitleWrapper>
              <Comment>{coment.comentario}</Comment>
            </CommentCard>
          ))}
        </>
      )}
    </Container>
  )
}
