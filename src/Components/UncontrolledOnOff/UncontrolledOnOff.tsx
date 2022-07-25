import './UncontrolledOnOff.css';
import {useState} from "react";

type OnOffPropsType = {
  onChange: (conditionOnOf: boolean) => void
}

export const UncontrolledOnOff = (props: OnOffPropsType) => {

  const [condition, setCondition] = useState(false)

  let styleOn = {
    backgroundColor: condition? 'green': 'white'
  }

  let styleOff = {
    backgroundColor: condition? 'white': 'red'
  }

  let styleCircle = {
    backgroundColor: condition? 'green': 'red'
  }

  const onClicked = () => {
    setCondition(true)
    props.onChange(true)
  }
  const offClicked = () =>  {
    setCondition(false)
    props.onChange(false)
  }

  return (
    <div className="on_off">
      <div className="square" style={styleOn} onClick={onClicked}>on</div>
      <div className="square" style={styleOff} onClick={offClicked}>off</div>
      <div className="circle" style={styleCircle}></div>
    </div>
  )
}