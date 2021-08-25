import React, { useState } from 'react'
import './baygates_btns.scss'

export default function BayGatesButtons(props) {
    const [activeBayGate, setactiveBayGate] = useState(false)
    return (
        <div className='BayGatesButtons'>
          <p className="baygate_toggle">{props.bg_name}</p>            
        </div>
    )
}
