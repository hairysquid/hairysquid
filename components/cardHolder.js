import { css } from "@emotion/react";

export default function CardHolder({ children }) {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
      `}
    >
      {children}
    </div>
  );
}
