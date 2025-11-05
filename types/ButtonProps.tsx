import React from "react";

export const ButtonType = {
    BUTTON: "button",
    RESET: 'reset',
    SUBMIT: 'submit',
} as const;

export type ButtonProps = {
    type: any;
    style?: string;
    label?: string;
    url?: string;
    className?: string;
    ico?:string | React.ReactNode;
};