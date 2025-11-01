import {NavProps} from "../types/navProps"
import { createItems } from "../hooks/createItems"

export default function Nav({
    className = '',
    classNameList = '',
    items = [],
}: NavProps) {

    return (
    <nav className={`${className}`}>
        <ul className={`${classNameList}`}>
            {createItems(items)}
        </ul>
    </nav>
  );
}