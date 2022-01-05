import type { ReactElement } from 'react'
import React from 'react'
import classNames from 'classnames'
import type { Props } from './types'
import './styles.scss'
import { Link } from 'react-router-dom'

export default function NavTab({
  title,
  extension,
  classWidth,
}: Props): ReactElement {
  return (
    <div className={classNames('navItems', `${classWidth}`)}>
      <p>
        <Link to={extension}>{title}</Link>
      </p>
    </div>
  )
}
