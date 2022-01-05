import type { ReactElement } from 'react'
import type { Props } from './types'

export default function Image({
  src,
  alt = 'Image here',
  ...props
}: Props): ReactElement {
  return <img src={src} alt={alt} {...props} />
}
