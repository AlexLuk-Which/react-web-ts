import React from 'react'
import type { ReactElement } from 'react'

import type { Props } from './types'

export default function BackArrow({
  fill = '#000000',
  height = 17,
  width = 17,
}: Props): ReactElement {
  return (
    <svg height={height} width={width} viewBox="0 0 17 17">
      <path
        fill={fill}
        fillRule="evenodd"
        d="M8.4625,16.125 L16.4625,7.84318835 L14.9069444,6.20983106 L9.57361111,11.7310388 L9.57361111,0.125 L7.35138889,0.125 L7.35138889,11.7310388 L2.01805556,6.20983106 C0.973611111,7.26806254 0.4625,7.82018332 0.4625,7.84318835 C0.4625,7.86619339 3.12916667,10.6267973 8.4625,16.125 Z"
        transform="rotate(90 8.5 8.5)"
      />
    </svg>
  )
}
