/** @jsx jsx */

import { useRef, useLayoutEffect, useState } from "react";
import { css, jsx } from "@emotion/react";
export default function NavBar({ sectionRefs, link = false }) {
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
  console.log(link, "LINK");
  return (
    <div
      style={{ top: isHidden ? "-50px" : 0 }}
      css={css`
        display: flex;
        justify-content: flex-end;
        overflow: hidden;
        background-color: rgba(155, 155, 155, 0.9);
        position: fixed;
        width: 100%;
        transition: top 0.3s;
        a {
          color: #f2f2f2;
          text-align: center;
          padding: 14px;
          text-decoration: none;
          cursor: pointer;
        }
      `}
    >
      <a
        onClick={() => {
          link
            ? (location.href = "/")
            : sectionRefs.home.current.scrollIntoView({
                behavior: "smooth",
              });
        }}
      >
        Home
      </a>
      <a
        onClick={() => {
          link
            ? (location.href = "/#our-approach")
            : sectionRefs.ourApproach.current.scrollIntoView({
                behavior: "smooth",
              });
        }}
      >
        Our Approach
      </a>
      <a
        onClick={() => {
          link
            ? (location.href = "/#who-we-are")
            : sectionRefs.whoWeAre.current.scrollIntoView({
                behavior: "smooth",
              });
        }}
      >
        Who We Are
      </a>
      <a
        onClick={() => {
          link
            ? (location.href = "/#our-projects")
            : sectionRefs.ourProjects.current.scrollIntoView({
                behavior: "smooth",
              });
        }}
      >
        Our Projects
      </a>
      <a
        onClick={() => {
          link
            ? (location.href = "/#contact")
            : sectionRefs.contact.current.scrollIntoView({
                behavior: "smooth",
              });
        }}
      >
        Contact
      </a>
    </div>
  );
}
