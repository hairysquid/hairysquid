import * as styles from "./navBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <a href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
    </div>
  );
}
