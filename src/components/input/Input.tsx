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
    size = "sm"
}) => {

    const componentStyle = {
        height: "auto",
        '--input-height': `var(--input-height-${size})`,
        '--input-font-size' : `var(--input-font-size-${size})`,
        '--input-radius' : `var(--input-radius-${radius})`
    }

    return (
        <div
            className={`box box-${style} radius-${radius}`}
            style={componentStyle}
        >
            <input type={type || "text"} placeholder={placeholder} />
        </div>
    )
}