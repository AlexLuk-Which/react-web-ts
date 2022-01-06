import React from 'react'
import type { ReactElement } from 'react'

import type { Props } from './types'

export default function TickShort({
  fill = '#ffffff',
  height = 12,
  width = 12,
}: Props): ReactElement {
  return (
    <svg
      data-testid="svg-tick-short"
      width={width}
      height={height}
      viewBox="0 0 12 11"
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M10.7971094,16.9960938 C11.1076563,16.9960938 11.3478906,16.8671875 11.5178125,16.6152344 L17.025625,8.03710938 C17.1486719,7.84375 17.2014063,7.6796875 17.2014063,7.52148438 C17.2014063,7.10546875 16.9084375,6.81835938 16.4924219,6.81835938 C16.1994531,6.81835938 16.0236719,6.92382812 15.8478906,7.19921875 L10.7736719,15.2558594 L8.16039063,11.9101562 C7.98460938,11.6816406 7.80882813,11.5878906 7.54515625,11.5878906 C7.12328125,11.5878906 6.81859375,11.8867188 6.81859375,12.296875 C6.81859375,12.4785156 6.88304688,12.6542969 7.03539063,12.8359375 L10.0705469,16.6210938 C10.275625,16.8789062 10.4982813,16.9960938 10.7971094,16.9960938 Z"
        transform="translate(-6 -6)"
      />
    </svg>
  )
}
