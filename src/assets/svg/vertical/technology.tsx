import React from 'react'
import type { ReactElement } from 'react'

import type { Props } from '../types'

export default function Technology({
  height = 28,
  width = 28,
}: Props): ReactElement {
  return (
    <svg
      data-testid="svg-technology"
      height={height}
      width={width}
      viewBox="0 0 28 28"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-16.000000, -271.000000)" fill="#000000">
          <g transform="translate(0.000000, 192.000000)">
            <g transform="translate(0.000000, 56.500000)">
              <g transform="translate(16.000000, 22.500000)">
                <g transform="translate(0.000000, 3.500000)">
                  <path d="M9.5,22.1666667 C9.08578644,22.1666667 8.75,21.8308802 8.75,21.4166667 L8.75,21.1666667 C8.75,20.7524531 9.08578644,20.4166667 9.5,20.4166667 L11.666,20.416 L11.6666667,18.6666667 L1.75,18.6666667 C0.783501688,18.6666667 0,17.883165 0,16.9166667 L0,1.75 C0,0.783501688 0.783501688,0 1.75,0 L26.25,0 C27.2164983,0 28,0.783501688 28,1.75 L28,16.9166667 C28,17.883165 27.2164983,18.6666667 26.25,18.6666667 L16.3333333,18.6666667 L16.333,20.416 L18.5,20.4166667 C18.9142136,20.4166667 19.25,20.7524531 19.25,21.1666667 L19.25,21.4166667 C19.25,21.8308802 18.9142136,22.1666667 18.5,22.1666667 L9.5,22.1666667 Z M26.25,1.75 L1.75,1.75 L1.75,16.9166667 L26.25,16.9166667 L26.25,1.75 Z" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}
