import React from 'react'
import type { ReactElement } from 'react'

import type { Props } from './types'

export default function Tick({
  fill = '#01892e',
  height = 16,
  width = 16,
}: Props): ReactElement {
  return (
    <svg
      data-testid="svg-tick"
      height={height}
      width={width}
      viewBox="0 0 16 16"
    >
      <path
        d="m0 11.314 1.19-1.191 2.978 2.976L14.291 2.977l1.19 1.191L4.169 15.482 0 11.314z"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  )
}
