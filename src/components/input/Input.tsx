import React from "react";
import "./Input.css";
import { InputProps } from "./Input.types";

export const Input: React.FC<InputProps> = ({
    id,
    style = "default",
    type,
    radius = "xs" ,
    placeholder,
    button,
    size
}) => {
    return (
        <div className={`box box-${style} radius-${radius}`}>
            <input type={type || "text"} placeholder={placeholder} />
        </div>
    )
}