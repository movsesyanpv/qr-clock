import React, { useState } from 'react'
import QRCode from 'qrcode.react'
import { useInterval } from './hooks/set-interval'
import moment from 'moment'
import withSizes from 'react-sizes'
import GitHubForkRibbon from 'react-github-fork-ribbon'

const getTime = () => moment().toISOString()

const QRClock = ({ width, height }) => {
  let [time, setTime] = useState(getTime())

  useInterval(() => {
    setTime(getTime())
  }, 100)
  return (
    <div className='main-container'>
      <div style={{ color: '#fff', height: 50 }}>{ ${time}` }</div>
      <div className='clock-container'>
        <QRCode
          value={ time }
          renderAs='svg'
          size={ Math.min(width, height) - 50 }
          bgColor={ '#000' }
          fgColor={ '#FFF' }
        />
      </div>
      // <GitHubForkRibbon
      //   href="https://github.com/kaelhem/qr-clock"
      //   target="_blank"
      //   position="right"
      //   color="orange"
      // >Fork original on GitHub</GitHubForkRibbon>
    </div>
  )
}

export default withSizes(sizes => sizes)(QRClock)
