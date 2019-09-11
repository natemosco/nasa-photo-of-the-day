import React from "react";
import {CardBuilder} from "./CardBuilder";

const DailyImageCard = props =>{
    <div className="card-container">
        <CardBuilder 
        copyright = {props.copyright};
        date = {props.date};
        content = {props.explanation};
        imgUrl = {props.hdurl};
        title = {props.title};
        />;
    </div>
}
export default DailyImageCard;