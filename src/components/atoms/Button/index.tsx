import type { ReactElement } from 'react'
import { Props } from './types'

export default function Button({
  tabIndex = 0,
  ...props
}: Props): ReactElement {
  return <button tabIndex={tabIndex} {...props} />
}
