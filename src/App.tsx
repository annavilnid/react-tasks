import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import UncontrolledAccordion from "./Components/UncontrolledAccordion/UncontrolledAccordion"
import {Rating} from "./Components/Rating/Rating";
import {UncontrolledRating} from "./Components/UncontrolledRating/UncontrolledRating"
import {UncontrolledOnOff} from "./Components/UncontrolledOnOff/UncontrolledOnOff"
import {OnOff} from "./Components/OnnOff/OnOff";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5


function App() {
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  const [conditionOnOf, setConditionOnOf] = useState(false)

  return (
    <div className="App">
      <OnOff condition={conditionOnOf} onChange={setConditionOnOf}/>
      <UncontrolledOnOff onChange={setConditionOnOf}/>{conditionOnOf.toString()}
      <PageTitle title={"This is App component1"}/>
      <Rating value={ratingValue} onClick={setRatingValue}/>
      <Accordion title={"Menu"} collapsed={accordionCollapsed} onChange={()=>setAccordionCollapsed(!accordionCollapsed)}/>
      <UncontrolledAccordion title={"Users"}/>
      <PageTitle title={"This is App component2"}/>
      <UncontrolledRating/>
    </div>
  );
}

function PageTitle(props: any) {
  return (
    <h1>
      {props.title}
    </h1>
  );
}

export default App;
