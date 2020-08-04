import React, { useState, useEffect } from 'react'
import ContextConsumer from './Context'
import Transition from './Transition'
// import Header from "./Header"
// import Menu from "./Menu"

const PageWrap = props => {
  const [safari, setSafari] = useState(null)
  const [pageReady, setPageReady] = useState(false)
  const { location } = props

  useEffect(() => {
    const isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
    setSafari(isSafari || iOS ? true : false)
    window.addEventListener('pageshow', setPageReady(true))

    return () => {
      window.removeEventListener('pageshow', setPageReady(true))
    }
  })

  return (
    <ContextConsumer>
      {({ data, set }) => {
        const childrenWithProps = React.Children.map(
          props.children,
          (child, i) => React.cloneElement(child, { ...data, set })
        )
        return (
          <div className="page_wrap">
            <div className={`overlay ${pageReady ? ' ready' : ''}`}></div>

            <div
              className={`container ${data.menuOpen ? 'menu-open' : ''} ${
                safari ? 'safari' : ''
              }`}
            >
              <main>
                {/* <Header /> */}
                <Transition location={location}>{childrenWithProps}</Transition>
              </main>
              {/* <Menu location={location} /> */}
            </div>
          </div>
        )
      }}
    </ContextConsumer>
  )
}

export default PageWrap
