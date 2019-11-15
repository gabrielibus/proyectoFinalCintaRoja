import React from "react"
import "./ColorPriority.css"


function ColorPriority(props) {
    const priority = props.priority

    if (priority === "high") {
        return (
            <div className="priorityRed">
                <span> {priority} </span>
            </div>
        );
    }
    else if (priority === "medium") {
        return (
            <div className="priorityYellow">
                <span> {priority} </span>
            </div>
        );
    }
    else if (priority === "low") {
        return (
            <div className="priorityGreen">
                <span> {priority} </span>
            </div>
        );
    }
    
}

export default ColorPriority