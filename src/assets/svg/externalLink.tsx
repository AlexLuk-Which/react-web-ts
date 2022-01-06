import React from 'react'
import type { ReactElement } from 'react'

import type { Props } from './types'

export default function ExternalLink({
  fill = '#1866c8',
  height = 16,
  width = 16,
}: Props): ReactElement {
  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 16 16"
      data-testid="svg-external-link"
    >
      <path
        d="M13.55 0H16v6.651a1.014 1.014 0 01-2.027 0V3.46l-6.726 6.727a1.007 1.007 0 01-.716.296 1.014 1.014 0 01-.716-1.73l6.725-6.725H9.349a1.014 1.014 0 110-2.027h4.2zM6.796 2a1.019 1.019 0 110 2.04h-4.33a.426.426 0 00-.426.426v9.069c0 .234.19.424.425.424h9.07c.235 0 .425-.19.425-.424V9.204a1.02 1.02 0 012.04 0v4.331A2.469 2.469 0 0111.534 16H2.465A2.468 2.468 0 010 13.535V4.466A2.47 2.47 0 012.465 2h4.331z"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  )
}
