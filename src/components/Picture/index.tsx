import React from 'react'

import * as S from './styles'

interface PictureProps {
  imageSrc: string
}

export function Picture({ imageSrc }: PictureProps) {
  return <S.Image src={imageSrc} alt="Imagem do cliente" />
}
