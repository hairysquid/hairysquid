import * as styles from "./navBar.module.css";
import { useRef, useLayoutEffect, useState } from "react";

export default function NavBar() {
  const [isHidden, setIsHidden] = useState(false);
  const yPosRef = useRef(0);
  useLayoutEffect(() => {
    const listner = window.addEventListener("scroll", () => {
      const currY = window.pageYOffset;
      if (currY > yPosRef.current) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      yPosRef.current = currY;
    });
    return () => {
      window.removeEventListener(listner);
    };
  }, []);

  return (
    <div style={{ top: isHidden ? "-50px" : 0 }} className={styles.navbar}>
      <a href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
    </div>
  );
}
