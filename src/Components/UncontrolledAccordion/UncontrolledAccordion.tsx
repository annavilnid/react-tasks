import React, {useState} from "react";

type AccordionPropsType = {
  title: string
  //collapsed?: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {

  const [collapsed, setCollapsed] = useState(true)

  return (
    <>
      <AccordionTitle
        title={props.title}
        onClick={() => setCollapsed(!collapsed)}
      />
      {!collapsed && <AccordionBody/>}
    </>
  )
}

type AccordionTitleType = {
  title: string
  onClick: ()=>void
}

function AccordionTitle(props: AccordionTitleType) {
  console.log("rendering Accordion Title")
  return (
    <h3 onClick={() => props.onClick()}>
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

export default UncontrolledAccordion