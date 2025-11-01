'use client';

import { ButtonProps } from "../types/ButtonProps";
// import { ImgProps } from "../types/ImgProps";
import {useRedirect} from "../hooks/useRedirect";

export default function Button({
    label = '',
    url = '',
    className = '',
    ico = '',
}: ButtonProps) {
    const { redirectTo } = useRedirect()

    return (
        <button className={`${className}`} onClick={() => redirectTo(url)}>
            {ico && <span className="mr-2"> {ico}</span>} {/*&& = si condición es verdadera mostrar*/}
            {label}
        </button>
    )
}