import styles from "../styles/contact-form.module.css";
import React, { useState, useEffect, useRef } from "react";
import { useForm, ValidationError } from "@statickit/react";
import { ReCaptcha, loadReCaptcha } from "react-recaptcha-v3";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("contactForm");
  const [captchaSuccess, setCaptchaSuccess] = useState(false);
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const reCaptchaRef = useRef(null);

  useEffect(() => {
    try {
      loadReCaptcha(process.env.NEXT_PUBLIC_WEBSITE_KEY, () =>
        setRecaptchaReady(true)
      );
    } catch (e) {
      console.error(e);
    }
  }, []);

  if (state.succeeded) {
    return <p>Thanks for messaging us, we will get back to you shortly</p>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={styles.label}>
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" id="name" name="name" />
          <br />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className={styles.label}>
          <label for="topic">Topic</label>
          <br />
          <input type="text" id="topic" name="topic" />
          <br />
          <ValidationError prefix="Topic" field="topic" errors={state.errors} />
        </div>
        <div className={styles.label}>
          <label for="message" className={styles.label}>
            Message
          </label>
          <br />
          <textarea id="message" name="message" className={styles.message} />
          <br />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <ReCaptcha
          ref={reCaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_WEBSITE_KEY}
          action="sendEmail"
          verifyCallback={() => {
            setCaptchaSuccess(true);
          }}
        />
        <div className={styles.label}>
          {captchaSuccess && (
            <button
              type="submit"
              disabled={state.submitting}
              className={styles.button}
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
