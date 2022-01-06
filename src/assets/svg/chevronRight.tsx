import React from 'react'
import type { ReactElement } from 'react'

import type { Props } from './types'

export default function ChevronRight({
  fill = '#000000',
  height = 15,
  width = 15,
}: Props): ReactElement {
  return (
    <svg
      data-testid="svg-chveron-right"
      height={height}
      width={width}
      viewBox="0 0 15 15"
    >
      <path
        d="M4,1.4 C4,1.42915853 6.1,3.46249186 10.3,7.5 L4,14 L5.4,15.4 L13.1,7.4 L5.4,0 C4.46666667,0.904174805 4,1.37084147 4,1.4 Z"
        fill={fill}
      />
    </svg>
  )
}
