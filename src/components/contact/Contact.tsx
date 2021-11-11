import { useState } from "react";
import "./contact.scss";
import nodemailer from "nodemailer";

export default function Contact(): JSX.Element {
  const [message, setMessage] = useState(false);

  async function handleSubmit(e: { preventDefault: () => void; target: any; }): Promise<void> {
    e.preventDefault();
    const { message_email, message_text } = e.target.elements;
    let details = {
      email: message_email.value,
      message: message_text.value,
    };
    const transporter = nodemailer.createTransport({
      host: "smtp.yandex.ru",
      port: 465,
      secure: true,
      auth: {
        user: "vps@vitasha.tk",
        pass: "wrqehxkdjbzaeoju",
      }
    });
    await transporter.sendMail({
      from: '"Vitasha.tk" <vps@vitasha.tk>',
      to: "my@vitasha.tk",
      text: `from: ${details.email}, message: ${details.message}`,
      html: `<b>from:</b> ${details.email}<br/><b>message:</b> ${details.message}`,
    });
    setMessage(true);
  }
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="/assets/images/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input id="message_email" type="text" placeholder="Email" />
          <textarea id="message_text" placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}