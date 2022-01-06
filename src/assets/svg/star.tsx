import React from 'react'
import type { ReactElement } from 'react'

import type { Props } from './types'

export default function Star({
  fill = '#e30613',
  height = 18,
  width = 18,
}: Props): ReactElement {
  return (
    <svg height={height} width={width} viewBox="0 0 18 19">
      <g fill="none" fillRule="evenodd">
        <path
          fill={fill}
          d="m9 14.185-4.867 2.69.93-5.698L1.124 7.14l5.441-.831L9 1.125l2.432 5.185 5.443.831-3.938 4.036.93 5.698z"
        />
        <path
          fill={fill}
          d="m9 14.185-4.867 2.69.93-5.698L1.124 7.14l5.441-.831L9 1.125l2.432 5.185 5.443.831-3.938 4.036.93 5.698z"
        />
        <path
          fill={fill}
          d="m9 14.185-4.867 2.69.93-5.698L1.124 7.14l5.441-.831L9 1.125l2.432 5.185 5.443.831-3.938 4.036.93 5.698z"
        />
        <path
          fill={fill}
          d="m9 14.185-4.867 2.69.93-5.698L1.124 7.14l5.441-.831L9 1.125l2.432 5.185 5.443.831-3.938 4.036.93 5.698z"
        />
        <path
          fill={fill}
          d="m9 14.185-4.867 2.69.93-5.698L1.124 7.14l5.441-.831L9 1.125l2.432 5.185 5.443.831-3.938 4.036.93 5.698z"
        />
      </g>
    </svg>
  )
}
