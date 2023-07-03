import styles from "./nav.module.scss";
import logo from "assets/images/logo-white.png";

const Navigation = () => {
  return (
    <section>
      <nav>
        <ul className={styles.navContainer}>
          <div className={styles.logoWrapper}>
            <li>
              <div>
                <img src={logo} alt="logo" />
              </div>
              <div>
                <span>FILM</span>
                <span>BUSTER</span>
                <span className={styles.written}>Movie database</span>
              </div>
            </li>
          </div>
          <div className={styles.navItemsCont}>
            <li>HOME</li>
            <li>LATEST</li>
            <li>CONTACT</li>
          </div>
        </ul>
      </nav>
    </section>
  );
};

export default Navigation;
