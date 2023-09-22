import React from "react";
import { CardDailyStyle } from "./Card.style";
export default function CardDaily(props) {
    return (
        <CardDailyStyle>
            <div className="card-date">{props.date}</div>
            <div className="card-humidity">{props.humidity}</div>
            <div className="card-wind">{props.wind}</div>
            <div className="card-temp">{props.temp}</div>
        </CardDailyStyle>
    )
}