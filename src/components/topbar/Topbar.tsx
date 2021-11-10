import "./topbar.scss";
import {Person, Mail} from "@material-ui/icons";


export default function Topbar({ menuOpen, setMenuOpen } : {menuOpen: any, setMenuOpen: any}): JSX.Element {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="topLogo">Vitasha</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <a href="https://t.me/Hack2166">t.me/Hack2166</a>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <a href="mailto:my@vitasha.tk">my@vitasha.tk</a>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
