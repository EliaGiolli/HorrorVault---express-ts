// src/services/mailService.ts
import transporter from "../config/mailer";
//Types
import type { SentMessageInfo } from "nodemailer";

interface MailTypes {
  to: string,
  subject: string,
  html: string
}

export async function sendMail({ to, subject, html}: MailTypes): Promise<SentMessageInfo> {
  const info = await transporter.sendMail({
    from: `"${process.env.APP_NAME}" <${process.env.APP_EMAIL}>`,
    to,
    subject,
    html,
  });

  console.log("Email sent with an ID of:", info.messageId);
  return info;
}
