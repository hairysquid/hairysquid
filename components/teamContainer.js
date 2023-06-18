import { css } from "@emotion/react";

export default function TeamContainer({ children }) {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
      `}
    >
      {children}
    </div>
  );
}
