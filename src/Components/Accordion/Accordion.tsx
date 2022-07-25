import React from "react";

type AccordionPropsType = {
  title: string
  collapsed: boolean
  onChange: () => void
}

function Accordion(props: AccordionPropsType) {

  return (
    <>
      <AccordionTitle title={props.title} onChange={props.onChange}/>
      {props.collapsed && <AccordionBody/>}
    </>
  )
}

type AccordionTitleType = {
  title: string
  onChange: ()=>void
}

function AccordionTitle(props: AccordionTitleType) {
  console.log("rendering Accordion Title")
  return (
    <h3 onClick={(e)=>props.onChange()}>
      {props.title}
    </h3>
  );
}

function AccordionBody() {
  console.log("rendering Accordion Body")
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  );
}

export default Accordion