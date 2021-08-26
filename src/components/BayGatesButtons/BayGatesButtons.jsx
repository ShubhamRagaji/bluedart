import React from 'react'
import './baygates_btns.scss'

export default function BayGatesButtons(props) {
    return (
        <div className='BayGatesButtons'>
          <p className=
          {props.isActive?
          "baygate_toggle activeBg":"baygate_toggle"} onClick={props.onClick}>{props.bg_name}</p>            
        </div>
    )
}
