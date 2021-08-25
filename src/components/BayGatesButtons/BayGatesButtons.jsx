import React, { useState } from 'react'
import './baygates_btns.scss'

export default function BayGatesButtons(props) {
    const [activeBayGate, setactiveBayGate] = useState(false)
    return (
        <div className='BayGatesButtons'>
          <p className=
          {props.isActive?
          "baygate_toggle activeBg":"baygate_toggle"} onClick={props.onClick}>{props.bg_name}</p>            
        </div>
    )
}
