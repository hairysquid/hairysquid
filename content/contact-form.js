import styles from "../styles/contact-form.module.css";
import { TextArea } from "semantic-ui-react";

export default function ContactForm() {
  return (
    <div>
      <form>
        <div className={styles.label}>
          <label for="name">Name</label>
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
