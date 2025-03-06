import { FC } from "react";
import NavbarType from "../types/NavbarType.ts"
import NavbarCSS from "../css/Navbar.module.css"

const Navbar:FC<NavbarType> = ({children}) => {

    return (
        <div className={NavbarCSS.navbar}>
            {children}
        </div>
    );
}
export default Navbar