import { css } from "@emotion/react";

export default function ApproachContainer({ children }) {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        padding: 7vw;
      `}
    >
      {children}
    </div>
  );
}
