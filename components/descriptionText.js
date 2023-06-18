/** @jsx jsx */
import { css, jsx } from "@emotion/react";

export default function DescriptionText({ children }) {
  return (
    <div
      css={css`
        line-height: 1.5;
        font-size: 1.5rem;
        padding-inline: 5em;
      `}
    >
      {children}
    </div>
  );
}
