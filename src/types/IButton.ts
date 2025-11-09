import React from "react"

export interface IButton {

    Pressable? : () => void,
    title? : string,
    color : string,
    type  : 'Buttons' | 'reset',
    children?: React.ReactNode;

}