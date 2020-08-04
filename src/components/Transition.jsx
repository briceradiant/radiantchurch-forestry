import React from 'react'
import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group'
const getTransitionStyles = {
  entering: {
    position: `absolute`,
    transform: `translateY(40px)`,
    // transform: `translateY(-100%)`,
    opacity: 0.0001,
  },
  entered: {
    transition: `700ms ease-in-out`,
    opacity: 1,
    // transform: `translateX(-100%)`,
  },
  exiting: {
    transition: `700ms ease-in-out`,
    opacity: 0.0001,
    transform: `translateY(40px)`,
    // transform: `translateY(100%)`,
  },
}

const Transition = props => {
  const { children, location } = props
  return (
    <TransitionGroup>
      <ReactTransition
        key={location.pathname}
        timeout={{
          enter: 450,
          exit: 450,
        }}
      >
        {status => (
          <div
            style={{
              // background: "#f5c614",
              // height: "100%",
              // width: "100%",
              // position: "fixed",
              // left: 0,
              // top: 0,
              // zIndex: 99999,
              ...getTransitionStyles[status],
            }}
          >
            {children}
          </div>
        )}
      </ReactTransition>
    </TransitionGroup>
  )
}

export default Transition
