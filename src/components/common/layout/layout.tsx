import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import Navigation from "../navigation";

const Layout = () => {
  return (
    <main className={styles.appContainer}>
      <div className={styles.backgroundImage} />
      <Navigation />

      <Outlet />
    </main>
  );
};

export default Layout;
