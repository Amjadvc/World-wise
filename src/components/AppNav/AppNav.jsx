import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav() {
  console.log(styles);
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">countries</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
