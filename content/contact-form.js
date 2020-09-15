import styles from "../styles/contact-form.module.css";
import { TextArea } from "semantic-ui-react";
import { useForm, ValidationError } from "@statickit/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("contactForm");
  if (state.succeeded) {
    return <p>Thanks for messaging me, I'll get back to you shortly</p>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={styles.label}>
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" id="name" name="name" />
          <br />
        </div>
        <div className={styles.label}>
          <label for="topic">Topic</label>
          <br />

          <input type="text" id="topic" name="topic" />
          <br />
        </div>
        <div className={styles.label}>
          <label for="message" className={styles.label}>
            Message
          </label>
          <br />
          <textarea id="message" name="message" className={styles.message} />
          <br />
        </div>
        <div className={styles.label}>
          <input type="submit" value="Submit" className={styles.button} />
        </div>
      </form>
    </div>
  );
}
