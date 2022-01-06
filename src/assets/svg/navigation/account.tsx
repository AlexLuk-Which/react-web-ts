import React from 'react'
import type { ReactElement } from 'react'

import type { Props } from '../types'

export default function Account({
  fill = '#676767',
  height = 28,
  width = 29,
}: Props): ReactElement {
  return (
    <svg width={width} height={height} viewBox="0 0 29 28">
      <g transform="translate(-48 -5)" fill="none" fillRule="evenodd">
        <g transform="translate(48.5 5)">
          <g fill={fill} fillRule="nonzero">
            <path d="M14 1C6.82 1 1 6.82 1 14s5.82 13 13 13 13-5.82 13-13S21.18 1 14 1zm0 2c6.075 0 11 4.925 11 11s-4.925 11-11 11S3 20.075 3 14 7.925 3 14 3z" />
            <path d="M14 7a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
            <path d="M14 17a8.002 8.002 0 0 1 7.844 6.419l.044.237-1.972.334a6.002 6.002 0 0 0-11.804-.152l-.039.22-1.975-.31A8.002 8.002 0 0 1 14 17z" />
          </g>
        </g>
      </g>
    </svg>
  )
}
