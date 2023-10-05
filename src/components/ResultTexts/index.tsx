import { Container, Title, Text, WhatsappLink } from './styles'
import { useContextSelector } from 'use-context-selector'
import { SimulatorContext } from '../../contexts/SimulatorContext'
import { priceFormatter } from '../../utils/formatter'
import { ResultTextsModel } from '../../models/interfaces'

export function ResultTexts() {
  const { result, simulation, texts } = useContextSelector(
    SimulatorContext,
    (context) => {
      return {
        result: context.resultData,
        simulation: context.simulationData,
        texts: context.resultTexts,
      }
    },
  )

  const positiveResult: ResultTextsModel = texts[0]
  const negativeResult: ResultTextsModel = texts[1]

  if (texts.length === 0) return null

  return (
    <Container>
      {result.saving >= 100000 ? (
        <>
          <Title>{positiveResult.title}</Title>
          <Text>
            {positiveResult.text1.replace(
              '{XX}',
              priceFormatter.format(result.saving),
            )}
          </Text>
          <Text>{positiveResult.text2}</Text>
          {simulation.age > 60 && (
            <Text>
              {positiveResult.text3.replace('{XX}', String(simulation.age))}
            </Text>
          )}
          {simulation.rentalProperty === 'sim' && (
            <Text>{positiveResult.text4}</Text>
          )}
          {simulation.hasChildren === 'sim' && (
            <Text>{positiveResult.text5}</Text>
          )}
          {simulation.rent >= 30000 && (
            <Text>
              {positiveResult.text6.replace(
                '{XX}',
                priceFormatter.format(simulation.rent),
              )}
            </Text>
          )}
          <Text>{positiveResult.text7}</Text>
          <Text>{positiveResult.text8}</Text>
          <WhatsappLink href={positiveResult.wpUrl} target="_blank">
            ENTENDER MELHOR MEU RESULTADO
          </WhatsappLink>
        </>
      ) : (
        <>
          <Title>{negativeResult.title}</Title>
          {[...Array(8)].map((_, index) => {
            if (index === 2 && simulation.age < 30) {
              return (
                <Text key={`negative-text${index + 1}`}>
                  {negativeResult.text3.replace('{XX}', String(simulation.age))}
                </Text>
              )
            }

            if (
              negativeResult[`text${index + 1}` as keyof ResultTextsModel] ===
              ''
            ) {
              return null
            } else {
              if (index === 2 && simulation.age >= 30) {
                return null
              }
              return (
                <Text key={`negative-text${index + 1}`}>
                  {negativeResult[`text${index + 1}` as keyof ResultTextsModel]}
                </Text>
              )
            }
          })}
          <WhatsappLink href={negativeResult.wpUrl} target="_blank">
            ENTENDER MELHOR MEU RESULTADO
          </WhatsappLink>
        </>
      )}
    </Container>
  )
}
