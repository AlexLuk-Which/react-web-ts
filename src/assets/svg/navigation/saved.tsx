import React from 'react'
import type { ReactElement } from 'react'

import type { Props } from '../types'

export default function Saved({
  fill = '#676767',
  height = 28,
  width = 29,
}: Props): ReactElement {
  return (
    <svg width={width} height={height} viewBox="0 0 29 28">
      <g transform="translate(-48 -5)" fill="none" fillRule="evenodd">
        <g transform="translate(48.5 5)">
          <path
            d="M3.357 4.37C.26 7.555.092 12.39 3.584 15.98l9.39 9.655a1.434 1.434 0 0 0 2.06 0l9.39-9.655c3.485-3.584 3.312-8.414.217-11.601l-.185-.185c-2.858-2.777-6.995-3.094-10.311-.386l-.142.118-.142-.12c-3.394-2.77-7.642-2.384-10.504.563zm9.923 1.622.01.01a1.01 1.01 0 0 0 1.438-.01c2.69-2.759 6.137-2.622 8.483-.207l.16.171c2.202 2.422 2.263 5.903-.377 8.618l-8.991 9.242-8.99-9.242c-2.709-2.786-2.583-6.372-.226-8.8 2.345-2.414 5.796-2.547 8.493.218z"
            fill={fill}
          />
        </g>
      </g>
    </svg>
  )
}
