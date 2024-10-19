import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
function Logo() {
  return (
    <Link to="/">
      <div className={styles.logo_wrapper}>
        <img src="/img/logo.png" className={styles.logo} />
        <span>larger.world</span>
      </div>
    </Link>
  );
}

export default Logo;
