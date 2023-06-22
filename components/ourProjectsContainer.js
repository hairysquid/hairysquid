/** @jsx jsx */
import { css, jsx } from "@emotion/react";

export default function OurProjectsContainer({ children }) {
  return (
    <div
      css={css`
        padding-top: 5em;
        width: 100%;
        display: grid;
        grid-auto-flow: column;
        align-items: center;
        justify-items: center;
        justify-content: center;
        grid-template-columns: repeat(auto-fill, 25vw);
      `}
    >
      {children}
    </div>
  );
}
