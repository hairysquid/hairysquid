/** @jsx jsx */
import { css, jsx } from "@emotion/react";

export default function TitleText({ children }) {
  return (
    <div
      css={css`
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
        font-family: "Raleway", sans-serif;
        a {
          color: #0070f3;
          text-decoration: none;
        }
        a:hover,
        a:focus,
        a:active {
          text-decoration: underline;
        }
      `}
    >
      {children}
    </div>
  );
}
