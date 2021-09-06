import React from 'react'
import './baygates_btns.scss'

export default function BayGatesButtons(props) {
    return (
        <div className="BayGatesButtons bounceInDown" id={props.id} onClick={props.onClick}>
          <p className=
          {props.isActive?
          "baygate_toggle activeBg":"baygate_toggle"} >{props.bg_name}</p>            
        </div>
    )
}
