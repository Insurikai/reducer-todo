import React from "react";

export default (props) => {
    return(
        <li onClick={()=>{ props.toggleItem(props.item.id) }} className={`todo-item ${props.item.completed ? "underline" : ""}`}>{props.item.item}</li>
    )
}

