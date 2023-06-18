/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Button } from "semantic-ui-react";
export default function ContractCard({ children, title, link }) {
  return (
    <Button
      href={link}
      css={css`
        padding: 1em;
      `}
    >
      <div
        css={css`
          width: 100%;

          background-color: lightgrey;
          border-radius: 1em;
          padding: 1em;
        `}
      >
        <h3>{title}</h3>
        {children}
      </div>
    </Button>
  );
}
