import type { ReactElement } from 'react'

export type Props = {
  fill?: string
  height?: string | number
  width?: string | number
}

export type Component = {
  ({ fill, height, width }: Props): ReactElement
}

export type ComponentList = {
  BackArrow: Component
  ChevronRight: Component
  Clear: Component
  Cross: Component
  ExternalLink: Component
  Heart: Component
  MagnifyingGlass: Component
  Phone: Component
  QuestionMark: Component
  Shortlist: Component
  Star: Component
  StarOutline: Component
  Tick: Component
  TickShort: Component
} & BadgeList &
  VerticalIcons &
  NavigationIcons

export type BadgeList = {
  BestBuy: Component
  BrandAlert: Component
  DontBuy: Component
  EcoBuy: Component
  EnergySaver: Component
  FirstLook: Component
  GreatValue: Component
  SafetyAlert: Component
}

export type VerticalIcons = {
  BabyChild: Component
  CarsTravel: Component
  HomeGarden: Component
  Technology: Component
}

export type NavigationIcons = {
  Account: Component
  Home: Component
  Saved: Component
  Search: Component
}
