import React from 'react'
import type { ReactElement } from 'react'

import type { Props } from '../types'

export default function Home({
  fill = '#676767',
  height = 28,
  width = 29,
}: Props): ReactElement {
  return (
    <svg width={width} height={height} viewBox="0 0 29 28">
      <g transform="translate(-32 -5)" fill="none" fillRule="evenodd">
        <g transform="translate(32.875 5)">
          <path
            d="m12.75 1.506-9.19 8.86c-.357.345-.56.824-.56 1.325V25.17C3 26.18 3.81 27 4.809 27h5.258c.98 0 1.774-.804 1.774-1.796v-6.698c0-.44.355-.798.793-.798h2.502c.438 0 .793.358.793.8v6.696c0 .992.795 1.796 1.775 1.796h5.486c1 0 1.81-.82 1.81-1.831V11.69c0-.5-.203-.98-.56-1.324l-9.191-8.861a1.795 1.795 0 0 0-2.498 0zM14 2.866l9.167 8.837v13.44h-5.405v-6.635c0-1.468-1.176-2.657-2.626-2.657h-2.502l-.154.004c-1.378.08-2.472 1.237-2.472 2.651v6.637H4.833V11.702L14 2.865z"
            fill={fill}
          />
        </g>
      </g>
    </svg>
  )
}
