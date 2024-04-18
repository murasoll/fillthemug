import { ReactNode } from "react";

type InputSize = "xs" | "sm" | "lg" | "xl";
type InputType = "text" | "number";
type InputRadius = "xs" | "sm" | "lg" | "xl";
type InputStyle = "default" | "outline" | "filled";

export interface InputProps {
    id?: string;
    style?: InputStyle;
    type?: InputType;
    radius?: InputRadius;
    placeholder?: string;
    button?: ReactNode;
    size?: InputSize;
}

const defaultInputProps: Partial<InputProps> = {
    style: "default",
};
