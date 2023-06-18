/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import { forwardRef } from "react";

export default forwardRef(function ScreenContainer({ children }, ref) {
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
});
