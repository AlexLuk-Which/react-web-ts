import React from 'react'
import type { ReactElement } from 'react'

import type { Props } from './types'

export default function MagnifyingGlass({
  fill = '#676767',
  height = 28,
  width = 29,
}: Props): ReactElement {
  return (
    <svg width={width} height={height} viewBox="0 0 29 28">
      <g transform="translate(-48 -5)" fill="none" fillRule="evenodd">
        <g transform="translate(48.5 5)">
          <path
            d="M11.957 1c6.052 0 10.957 4.926 10.957 11 0 2.665-.945 5.11-2.517 7.014l6.31 6.284a.996.996 0 0 1-1.319 1.489l-.087-.077-6.305-6.28a10.887 10.887 0 0 1-7.04 2.569c-6.05 0-10.956-4.926-10.956-11C1 5.926 5.905 1 11.957 1zm0 1.992c-4.95 0-8.965 4.032-8.965 9.007 0 4.976 4.015 9.008 8.965 9.008s8.964-4.032 8.964-9.008c0-4.975-4.014-9.007-8.964-9.007z"
            fill={fill}
          />
        </g>
      </g>
    </svg>
  )
}
