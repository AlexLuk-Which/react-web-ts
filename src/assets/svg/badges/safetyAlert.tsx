import React from 'react'
import type { ReactElement } from 'react'

import type { Props } from '../types'

export default function SafetyAlert({
  height = 30,
  width = 139,
}: Props): ReactElement {
  return (
    <svg
      data-testid="svg-safety-alert"
      width={width}
      height={height}
      viewBox="0 0 139 30"
    >
      <g fill="none" fillRule="evenodd">
        <path fill="#fcc126" d="M0 0h139v30H0z" />
        <g fill="#000">
          <text
            stroke="#000"
            strokeWidth="1"
            fontFamily="OpenSans-Semibold, Open Sans"
            fontSize="14"
            fontWeight="150"
            letterSpacing="1"
          >
            <tspan x="32" y="20">
              SAFETY ALERT
            </tspan>
          </text>
          <path
            fillRule="nonzero"
            d="M13.203.26a2 2 0 01.73.711l10.817 18.03a2 2 0 01-1.715 3.03H2a2 2 0 01-1.74-2.986l10.217-18.03A2 2 0 0113.203.26zm9.832 19.77L12.217 2 2 20.03z"
            transform="translate(3.432 3.97)"
          />
          <path
            stroke="#000"
            d="M13.2 14.03l.368-7h-2l.375 7zm-.622 4c.314 0 .558-.09.73-.271.173-.182.26-.428.26-.738s-.085-.553-.256-.728c-.17-.175-.415-.262-.734-.262-.323 0-.572.084-.747.252s-.263.414-.263.738c0 .323.089.573.266.747.177.175.425.263.744.263z"
            transform="translate(3.432 3.97)"
          />
        </g>
      </g>
    </svg>
  )
}
