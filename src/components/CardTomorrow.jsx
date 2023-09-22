import React from "react";
import {CardTomorrowStyle} from "./Card.style"
export default function CardTomorrow(props) {
  return (
    <CardTomorrowStyle>
      <div className="card-time">{props.time}</div>
      <img src={props.icon} alt="" className="card-img"></img>
      <div className="card-temp">{props.temp}</div>
      <div className="card-humidity">{props.humidity}</div>
    </CardTomorrowStyle>
  )
}