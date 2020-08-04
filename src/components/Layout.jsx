/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from 'react'
import { ContextProviderComponent } from './Context'

import '../styles.scss'

import PageWrap from './PageWrap'

const Layout = ({ children, location }) => {
  // console.log(props)
  return (
    <ContextProviderComponent>
      <PageWrap children={children} location={location} />
    </ContextProviderComponent>
  )
}

export default Layout
