import Style from "./navbar.module.css";

export default function Navbar(){
    return (
        <header className={Style.header}>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
        </header>
    )
}
