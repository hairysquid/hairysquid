import { css } from "@emotion/react";

export default function ContactContainer({ children }) {
  return (
    <div
      css={css`
        width: 50vw;
        padding: 7vw;
      `}
    >
      {children}
    </div>
  );
}
