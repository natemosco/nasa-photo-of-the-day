import React from "react";
import CardBuilder from "./CardBuilder";
import CardBuilder2 from "./CardBuilder2";
// import {DateDropdown} from "./DateDropdown"

const DailyImageCard = props =>{
    return (
        <div className="card-container">
            {/* <DateDropdown/> */}
            <CardBuilder2 //low res image card
           copyright = {props.copyright}
           date = {props.date}
           explanation = {props.explanation}
           url = {props.url}
           title = {props.title}
           />
            <CardBuilder // HD image card
            copyright = {props.copyright}
            date = {props.date}
            explanation = {props.explanation}
            hdurl = {props.hdurl}
            title = {props.title}
            />
        </div>
    )
}
export default DailyImageCard;