import { css } from "@emotion/react";

export default function MainContainer({ children }) {
  return (
    <div
      css={css`
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        font-family: "Montserrat", sans-serif;
      `}
    >
      {children}
    </div>
  );
}
