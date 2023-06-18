import { css } from "@emotion/react";

export default function Footer() {
  return (
    <footer
      css={css`
        border-top: 1px solid #eaeaea;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 5vh;
        font-family: "Montserrat", sans-serif;

        img {
          margin-left: 0.5rem;
        }

        a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}
    >
      &copy; copyright {new Date().getFullYear()} Hairysquid Ltd. all rights
      reserved.
    </footer>
  );
}
