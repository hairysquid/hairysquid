/** @jsx jsx */

import { css, jsx } from "@emotion/react";
export default function ImageContainer({ children, src, imgHeight }) {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <div
        css={css`
          border: 4px solid black;
        `}
      >
        <img src={src} height={imgHeight} />
      </div>
      {children}
    </div>
  );
}
