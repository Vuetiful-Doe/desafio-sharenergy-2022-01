import { Image } from '@chakra-ui/react'
import React from 'react'
import { MAX_WIDTH } from '../utils/constants'



function HeroImage({src}) {

  const imageWidth = MAX_WIDTH * 1.0;
  const imageHeight = imageWidth * 0.75;

  return (
    <Image src={src} htmlHeight={imageHeight} width={imageWidth} loading="lazy" borderRadius=".5em"/>
  )
}

export default HeroImage