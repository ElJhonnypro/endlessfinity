import Style from "./navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className={Style.header}>
      <nav className={Style.navbar}>
        <div className={Style.logo}>
          <Image src="/images/logo.png" loading="eager" alt="Endless Finity" width={123000} height={1999}/>
        </div>
        <ul>
          <li><a href="/"><span>Home</span></a></li>
          <li><a target='_blank' href="https://endlessfinity.craftingstore.net/"><span>Shop</span></a></li>
          <li><a href="/contact"><span>contact</span></a></li>
        </ul>
      </nav>
    </header>
  );
}
