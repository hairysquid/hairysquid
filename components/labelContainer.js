import { css } from "@emotion/react";

export default function LabelContainer({ children }) {
  return (
    <div
      css={css`
        padding-block: 1vh;
      `}
    >
      {children}
    </div>
  );
}
