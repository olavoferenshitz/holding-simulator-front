import { Container, HeadContainer, CommentsTitle, CommentsBody } from './styles'
import { Sumary } from '../Sumary'
import { Comments } from '../Comments'
import { ResultTexts } from '../ResultTexts'
import { AboutMe } from '../AboutMe'

export function Result() {
  return (
    <Container>
      <HeadContainer>
        <div className="title-wrapper">
          <h2>
            Resultado <br />
            <span>Simulador de Holding Familiar</span>
          </h2>
          <p className="description">
            Confira a seguir os custos relacionados ao inventário e à doação em
            vida, juntamente com uma análise comparativa da economia mínima
            proporcionada pela Holding Familiar.
          </p>
        </div>
      </HeadContainer>
      <Sumary />
      <ResultTexts />
      <CommentsBody>
        <CommentsTitle>VEJA O QUE OS CLIENTES COMENTAM</CommentsTitle>
        <Comments />
      </CommentsBody>
      <AboutMe />
    </Container>
  )
}
