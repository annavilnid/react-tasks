import './OnOff.css';
import {useState} from "react";

type OnOffPropsType = {
  condition: boolean
  onChange: (condition: boolean)=>void
}

export const OnOff = (props: OnOffPropsType) => {

  let styleOn = {
    backgroundColor: props.condition ? 'green': 'white'
  }

  let styleOff = {
    backgroundColor: props.condition ? 'white': 'red'
  }

  let styleCircle = {
    backgroundColor: props.condition ? 'green': 'red'
  }

  return (
    <div className="on_off">
      <div className="square" style={styleOn} onClick={()=> props.onChange(true)}>on</div>
      <div className="square" style={styleOff} onClick={()=> props.onChange(false)}>off</div>
      <div className="circle" style={styleCircle}></div>
    </div>
  )
}