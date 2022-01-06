import React from 'react'
import type { ReactElement } from 'react'

import type { Props } from './types'

export default function Cross({
  fill = '#d32f2f',
  height = 16,
  width = 16,
}: Props): ReactElement {
  return (
    <svg
      data-testid="svg-cross"
      height={height}
      width={width}
      viewBox="0 0 16 16"
    >
      <path
        d="m13.314 2 1.19 1.19-5.062 5.062 5.063 5.062-1.191 1.19-5.062-5.062-5.061 5.063L2 13.314l5.061-5.062L2 3.191 3.19 2l5.062 5.061L13.314 2z"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  )
}
