import React from "react";
import './table.scss'

export default function Table(props) {
  return (
    <div className="Table">
      <table>
          {props.children}        
      </table>
    </div>
  );
}
