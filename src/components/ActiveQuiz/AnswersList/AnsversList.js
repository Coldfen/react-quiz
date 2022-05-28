import React from "react";
import classes from './AnsversList.module.css'
import AnsverItem from "./AnswerItem/AnswerItem";

const AnswersList = props => (
  <ul className={classes.AnsversList}>
    {props.answers.map((answer, index) => {
      return (
        <AnsverItem 
          key={index}
          answer={answer}
          onAnswerClick={props.onAnswerClick}
          state={props.state ? props.state[answer.id] : null}
        />
      )
    })}
  </ul>
)

export default AnswersList