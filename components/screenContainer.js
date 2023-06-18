import { css } from "@emotion/react";

export default function ScreenContainer(ref, { children }) {
  return (
    <div
      ref={ref}
      css={css`
        height: 100vh;
        width: 100vw;
        display: flex;
        /* text-align: center; */
        align-content: center;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      `}
    >
      {children}
    </div>
  );
}
