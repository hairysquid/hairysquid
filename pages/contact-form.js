/** @jsx jsx */
import styles from "../styles/contact-form.module.css";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import LabelContainer from "../components/labelContainer";
import { css, jsx } from "@emotion/react";
export default function ContactForm() {
  const [state, handleSubmit] = useForm("xqkwlonj");

  if (state.succeeded) {
    return <p>Thanks for messaging us, we will get back to you shortly</p>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <LabelContainer>
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" id="name" name="name" />
          <br />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </LabelContainer>
        <LabelContainer>
          <label for="topic">Topic</label>
          <br />
          <input type="text" id="topic" name="topic" />
          <br />
          <ValidationError prefix="Topic" field="topic" errors={state.errors} />
        </LabelContainer>
        <LabelContainer>
          <label
            for="message"
            css={css`
              padding-block: 1vh;
            `}
          >
            Message
          </label>
          <br />
          <textarea
            id="message"
            name="message"
            css={css`
              width: 30vw;
              height: 20vh;
            `}
          />
          <br />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </LabelContainer>
        <LabelContainer>
          <button
            type="submit"
            disabled={state.submitting}
            css={css`
              font-weight: bold;
              width: 7vw;
              height: 4 vh;
              font-size: 1.75vh;
            `}
          >
            Submit
          </button>
        </LabelContainer>
      </form>
    </div>
  );
}
