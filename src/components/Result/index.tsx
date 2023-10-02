import {
  Container,
  TextBody,
  HeadContainer,
  Title,
  Text,
  WhatsappLink,
} from './styles'
import { useContextSelector } from 'use-context-selector'
import { SimulatorContext } from '../../contexts/SimulatorContext'
import { Sumary } from '../Sumary'
import { priceFormatter } from '../../utils/formatter'

export function Result() {
  const { result, simulation } = useContextSelector(
    SimulatorContext,
    (context) => {
      return {
        result: context.resultData,
        simulation: context.simulationData,
      }
    },
  )

  const positiveResult: string =
    'https://api.whatsapp.com/send?phone=5567992089999&text=Oi,%20utilizei%20o%20Simulador%20de%20Holding%20e%20deu%20resultado%20positivo%20para%20a%20Holding%20Familiar.%20Gostaria%20de%20saber%20mais%20sobre.'
  const negativeResult: string =
    'https://api.whatsapp.com/send?phone=5567992089999&text=Oi,%20utilizei%20o%20Simulador%20de%20Holding%20e%20deu%20como%20resultado%20um%20poss%C3%ADvel%20testamento%20em%20vida%20com%20reserva%20de%20usufruto,%20doa%C3%A7%C3%A3o%20em%20vida,%20seguro%20de%20vida%20ou%20um%20plano%20de%20previd%C3%AAncia%20privada%20espec%C3%ADfico.%20Gostaria%20de%20saber%20mais%20sobre.'

  return (
    <Container>
      <HeadContainer>
        <div className="title-wrapper">
          <h2>
            Resultado <br />
            <span>Simulador de Holding Familiar</span>
          </h2>
          <p className="description">
            Confira a seguir os custos relacionados ao Inventário e à doação em
            vida, juntamente com uma análise comparativa da economia
            proporcionada pela Holding Familiar.
          </p>
        </div>
      </HeadContainer>
      <Sumary />
      <TextBody>
        {result.saving >= 100000 ? (
          <>
            <Title>Parabéns! A Holding Familiar é para você.</Title>
            <Text>
              Nossos resultados revelaram uma economia mínima de{' '}
              {priceFormatter.format(result.saving)} para sua família no caso de
              uma Holding. Fazer uma doação em vida ou depender de inventários
              tradicionais pode significar uma perda de até 30% do seu
              patrimônio. É uma escolha que pode impactar o futuro financeiro
              dos seus entes queridos.
            </Text>
            <Text>
              Com nosso método comprovado, o Legado80, sua família vai
              economizar mais de 80% em comparação com o tradicional inventário.
              Imagine a segurança de proteger não apenas seu patrimônio, mas
              também o futuro da sua geração.
            </Text>
            {simulation.age > 60 && (
              <Text>
                Além disso, considerando que você já ultrapassou os{' '}
                {simulation.age} anos, manter todos os seus bens em seu CPF
                representa um grande risco.
              </Text>
            )}
            {simulation.rentalProperty === 'sim' && (
              <Text>
                Como possui imóveis alugados, em uma Holding você tem a
                oportunidade de reduzir significativamente seus impostos. Em vez
                de pagar uma taxa de imposto de até 27,5% sobre a renda dos
                aluguéis, você poderá agora pagar entre 11% e 14,5%,
                economizando consideravelmente em seus encargos fiscais.
              </Text>
            )}
            {simulation.hasChildren === 'sim' && (
              <Text>
                Mesmo sem filhos, criar uma Holding pode beneficiar seus pais,
                cônjuge ou quem desejar. Quando tiver filhos, ajustes simples
                podem favorecê-lo.
              </Text>
            )}
            {simulation.rent >= 30000 && (
              <Text>
                Entendemos que com essa renda elevada de{' '}
                {priceFormatter.format(simulation.rent)} não faz nenhum sentido
                não ter um sistema de proteção patrimonial neste momento.
              </Text>
            )}
            <Text>
              Neste caso a manutenção mensal de um sistema de Holding na
              contabilidade terá um custo de aproximadamente R$ 150 por mês.
            </Text>
            <Text>
              Não espere para proteger o que é seu. A Holding Familiar realizada
              através do Método Legado80 é a chave para garantir um legado
              sólido para sua família.
            </Text>
            <Text>
              Agende agora para assegurar um futuro financeiro estável e
              tranquilo para todos que você ama. Sua família merece essa
              segurança.
            </Text>
            <WhatsappLink href={positiveResult} target="_blank">
              QUERO SER ATENDIDO
            </WhatsappLink>
          </>
        ) : (
          <>
            <Title>Talvez a Holding ainda não seja para você.</Title>
            <Text>
              Entendemos que a Holding Familiar e o Método Legado80 podem não
              ser a escolha ideal para você agora. Mas não se preocupe, há
              alternativas valiosas para proteger seu patrimônio e garantir o
              bem-estar da sua família.
            </Text>
            <Text>
              Se nossa abordagem atual não atende às suas necessidades,
              considere opções igualmente eficazes, como um testamento bem
              elaborado, uma doação em vida com reserva de usufruto, um seguro
              de vida ou um plano de previdência privada específico.
            </Text>
            {simulation.age < 30 && (
              <Text>
                Além disso, aos {simulation.age} anos, considerar a criação de
                uma Holding é sensato se você está no processo de construir seu
                patrimônio, planeja adquirir um imóvel, está pensando em
                casar-se ou deseja investir seu dinheiro com sabedoria.
              </Text>
            )}
            <Text>
              Agende uma consulta com o Dr. Olavo Ferenshitz, especialista em
              Planejamento Patrimonial Familiar, para discutir suas opções.
              Estamos prontos para ajudá-lo a tomar boas decisões e garantir um
              futuro seguro para você e seus entes queridos.
            </Text>
            <Text>
              Sua estabilidade patrimonial é nossa prioridade. Agende agora sua
              consulta e dê o primeiro passo em direção a uma vida protegida e
              tranquila.
            </Text>
            <WhatsappLink href={negativeResult} target="_blank">
              QUERO SER ATENDIDO
            </WhatsappLink>
          </>
        )}
      </TextBody>
    </Container>
  )
}
