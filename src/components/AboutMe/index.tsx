import { AboutMeContainer, PictureContainer } from './styles'
import { InstagramLogo } from 'phosphor-react'
import { Picture } from '../Picture'
import olavoImg from '../../assets/olavo.png'
import { useInView } from 'react-intersection-observer'

export function AboutMe() {
  const [aboutContainerRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })
  const instagramUrl = 'https://www.instagram.com/dr.olavoferenshitz/'
  return (
    <AboutMeContainer ref={aboutContainerRef}>
      {inView && (
        <>
          <div className="about-me-wrapper">
            <h4 className="title">Quem é o Dr. Olavo Ferenshitz, CFP®</h4>
            <p className="about-text">
              Advogado graduado em Direito em 2013, pós-graduado em Ciências
              Jurídicas e em Finanças, Investimentos e Banking pela Pontifícia
              Universidade Católica do Rio Grande do Sul (PUCRS). Tornou-se
              Educador Financeiro, Planejador Financeiro com certificação
              internacional CFP®, especialista em Investimentos com
              certificação CEA e advogado especialista em Planejamento
              Patrimonial Familiar.
            </p>
            <p className="about-text">
              Após residir nos Estados Unidos e Europa, concluiu cursos em
              renomadas entidades: Government of the United States, Yale
              University, Université de Genève e McMaster University partners
              with University of California San Diego. Atualmente é cidadão
              ítalo-brasileiro e defensor da ideia de que o Planejamento
              Patrimonial pode propiciar a família um futuro mais próspero que
              jamais se imaginou!
            </p>
            <p className="about-text">
              Atualmente o seus conhecimentos foram canalizados para transmitir
              uma informação que beneficie a maior quantidade possível de
              pessoas: a de como o Planejamento Patrimonial Familiar pode criar
              um verdadeiro Legado Patrimonial para a família brasileira, como
              proteção de bens, redução dos custos da sucessão e principalmente,
              evitar o inventário.
            </p>
            <p className="follow-me">ME SIGA NO INSTAGAM:</p>
            <a
              href={instagramUrl}
              target="_blank"
              className="intagram"
              rel="noreferrer"
            >
              <InstagramLogo size={36} color="#569c54" weight="duotone" />
            </a>
          </div>
          <PictureContainer>
            <Picture imageSrc={olavoImg} />
          </PictureContainer>
        </>
      )}
    </AboutMeContainer>
  )
}
