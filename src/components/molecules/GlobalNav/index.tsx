// Global Nav reference: https://www.youtube.com/watch?v=6pidsgeLLzE&t=13s
import React, { useState } from 'react'
import classNames from 'classnames'
import NavTab from '../../atoms/NavTab/'
import './styles.scss'
import { useNavigate } from 'react-router-dom'
import Image from '../../atoms/Image'

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
  const [mobileToggle, setMobileToggle] = useState(true)
  const handleMobileToggle = () => setMobileToggle(!mobileToggle)
  const navigate = useNavigate()
  const handleBannerLogo = () => navigate('/', { replace: true }) //Back to home page

  return (
    <nav className={'navContainer'}>
      <div className={'navInner'}>
        <div className={'bannerLogo'}>
          <Image
            src="https://dwkujuq9vpuly.cloudfront.net/news/wp-content/uploads/2020/03/Driving_during_lockdown_main-175x105.jpg"
            alt="Banner Logo"
            width="150"
            height="50"
            onClick={handleBannerLogo}
          />
        </div>
        <div className={'iconsWrapper'}>
          <div className={classNames('icon', 'fb')} />
          <div className={classNames('icon', 'youtube')} />
          <div className={classNames('icon', 'linkedin')} />
          <button
            className={classNames('icon', 'mobileToggle')}
            onClick={handleMobileToggle}
            tabIndex={0}
          >
            Toggle
          </button>
        </div>
        <div
          className={classNames(
            'navItemsWrapper',
            mobileToggle && 'hideDeviceOnly'
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
