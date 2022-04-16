import React from 'react'

import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

export interface RouteType {
  path: string
  element: React.FC
}

const config: RouteType[] = [
  {
    path: '/',
    element: Home,
  },
  {
    path: '*',
    element: NotFound,
  },
]

export default config
