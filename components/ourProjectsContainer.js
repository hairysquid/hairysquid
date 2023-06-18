/** @jsx jsx */
import { css, jsx } from "@emotion/react";

export default function OurProjectsContainer({ children }) {
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      `}
    >
      {children}
    </div>
  );
}
