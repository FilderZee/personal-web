import { FC } from "react";
import NavlinkType from "../types/NavlinkType"
import NavlinkCSS from "../css/Navlink.module.css"

const Navlink:FC<NavlinkType> = ({linkText}) => {

    return (
        <a className={NavlinkCSS.navlink} href="#">{linkText}</a>
    )
}
export default Navlink;