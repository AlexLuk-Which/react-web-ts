import React from 'react'
import type { ReactElement } from 'react'

import type { Props } from './types'

export default function StarOutline({
  fill = '#e30613',
  height = 18,
  width = 18,
}: Props): ReactElement {
  return (
    <svg height={height} width={width} viewBox="0 0 16 16">
      <g fill="none" fillRule="evenodd">
        <path
          stroke={fill}
          d="M6.99990371,1.17698353 L8.82288703,5.06258746 L12.9625449,5.69501267 L9.96589554,8.76620557 L10.666996,13.0642955 L7,11.0373212 L3.33300401,13.0642955 L4.03410446,8.76620557 L1.03743134,5.69498834 L5.17614481,5.06258714 L6.99990371,1.17698353 Z"
          transform="translate(1 1)"
        />
      </g>
    </svg>
  )
}
