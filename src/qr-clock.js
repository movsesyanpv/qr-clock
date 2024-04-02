import React, { useState } from 'react'
import QRCode from 'qrcode.react'
import { useInterval } from './hooks/set-interval'
import moment from 'moment'
import withSizes from 'react-sizes'

const getTime = () => moment().toISOString()

const QRClock = ({ width, height }) => {
  let [time, setTime] = useState(getTime())

  useInterval(() => {
    setTime(getTime())
  }, 100)
  return (
    <div className='main-container'>
      <div style={{ color: '#fff', height: 50 }}>{ `${time}` }</div>
      <div className='clock-container'>
        <QRCode
          value={ time }
          renderAs='svg'
          size={ Math.min(width, height) - 50 }
          bgColor={ '#000' }
          fgColor={ '#FFF' }
        />
      </div>
    </div>
  )
}

export default withSizes(sizes => sizes)(QRClock)
