import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./NavBar.module.css";
import { Container } from "@mui/material";

function NavBar() {
  return (
    <Container>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Logo />
          <ul>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/howitworks">how it works</NavLink>
            </li>
            <li>
              <NavLink to="/membership">membership</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>

          <div className={styles.social_media}>
            <img
              src="/img/icons/Linkedin.png"
              alt="LinkedIn"
              style={{ width: "17px", height: "auto" }}
            />
            <NavLink to="/explore">
              <img
                src="/img/icons/Search.png"
                alt="Search"
                style={{ width: "17px", height: "auto" }}
              />
            </NavLink>
            <img
              src="/img/icons/User.png"
              alt="User"
              style={{ width: "17px", height: "auto" }}
            />
          </div>
        </nav>
      </header>
    </Container>
  );
}

export default NavBar;
