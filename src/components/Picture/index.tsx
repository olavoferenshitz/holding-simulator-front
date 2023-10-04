import { PictureProps } from '../../models/interfaces'
import { Image } from './styles'

export function Picture({ imageSrc }: PictureProps) {
  return <Image src={imageSrc} alt="Imagem do cliente" />
}
