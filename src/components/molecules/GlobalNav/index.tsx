// Global Nav reference: https://www.youtube.com/watch?v=6pidsgeLLzE&t=13s
import React, { useState } from 'react'
import classNames from 'classnames'
import NavTab from '../../atoms/NavTab/'
import styles from './styles.scss'
import { useNavigate } from 'react-router-dom'
import Image from '../../atoms/Image'
import brandLogo from '../../../assets/svg/logo-turq.svg'
import Button from '../../atoms/Button'
import Search from '../../../assets/svg/navigation/search'

const tabList = [
  { title: 'About', extension: '/about' },
  { title: 'Portfolio', extension: '/portfolio' },
  { title: 'CV', extension: '/cv' },
  { title: 'Hobby', extension: '/hobby' },
]

const setClassWidth = (value: number) => {
  const boundaries = [4, 6, 8, 10]
  const className = 'navTabWidth'
  let result = 4

  boundaries.forEach((boundary) => {
    if (value >= boundary) result = boundary
  })

  return `${className}${result}`
}

const classWidth = setClassWidth(tabList.length)

const GlobalNav = () => {
  const navigate = useNavigate()
  const [mobileToggle, setMobileToggle] = useState(true)
  const handleMobileToggle = () => setMobileToggle(!mobileToggle)

  const handleBannerLogo = () => navigate('/', { replace: true }) //Back to home page

  return (
    <nav className={styles.navContainer}>
      <div className={styles.navInner}>
        <div className={styles.bannerLogo}>
          <Image
            src={brandLogo}
            alt="Banner Logo"
            height="50"
            onClick={handleBannerLogo}
          />
        </div>
        <div className={styles.iconsWrapper}>
          <Button
            className={classNames(styles.icon, styles.fb)}
            onClick={() =>
              (window.location.href = 'https://www.facebook.com/alexcbluk')
            }
          />
          <Button
            className={classNames(styles.icon, styles.youtube)}
            onClick={() =>
              (window.location.href =
                'https://www.youtube.com/channel/UCOeVJ7RgcBHmu1yUZWz0BIQ')
            }
          />
          <Button
            className={classNames(styles.icon, styles.linkedin)}
            onClick={() =>
              (window.location.href = 'https://www.linkedin.com/in/alexcbluk/')
            }
          />
          <Button
            className={classNames(styles.icon, styles.mobileToggle)}
            onClick={handleMobileToggle}
          >
            <Search />
          </Button>
        </div>
        <div
          className={classNames(
            styles.navItemsWrapper,
            mobileToggle && styles.hideDeviceOnly
          )}
        >
          {tabList.map(({ title, extension }) => (
            <NavTab
              key={title}
              title={title}
              extension={extension}
              classWidth={classWidth}
            />
          ))}
        </div>
      </div>
    </nav>
  )
}
export default GlobalNav
