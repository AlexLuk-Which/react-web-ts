import React from 'react'
import type { ReactElement } from 'react'

import type { Props } from './types'

export default function Shortlist({
  fill = '#ff9800',
  height = 33,
  width = 33,
}: Props): ReactElement {
  return (
    <svg height={height} width={width} viewBox="0 0 33 33">
      <path
        d="M16.47 1.948l4.76 9.54 10.56 1.58-7.62 7.48 1.76 10.52-9.46-4.92-9.46 4.92 1.76-10.52-7.62-7.48 10.56-1.58z"
        fill={fill}
      />
    </svg>
  )
}
