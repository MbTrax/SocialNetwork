import React from "react"
import c from "./Dialog.module.css"
import { NavLink } from "react-router-dom";

let Dialog = (props) =>{
    return(
        <NavLink to={props.id} className={navData => navData.isActive ? c.active + ' ' + c.dialog : c.dialog}>{props.name}</NavLink>
    )
}

export default Dialog;