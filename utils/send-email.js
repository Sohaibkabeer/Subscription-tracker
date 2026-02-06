import transporter, { accountEmail } from "../config/nodemailer.js";
import { emailTemplate } from "./emait.templat.js";

export const sendReminderEmail = async ({ to, type, subscription }) => {
  if (!to || !type || !subscription)
    throw new Error("Missing required email parameters");

  const template = emailTemplate.find((t) => t.type === type);
  if (!template) throw new Error("Invalid email type");

  const mailInfo = {
    userName: subscription.user.name,
    subscriptionName: subscription.name,
    renewalDate: subscription.renewalDate.toDateString(),
    planName: subscription.planName,
    price: `${subscription.price} ${subscription.currency}`,
    paymentMethod: subscription.paymentMethod,
  };

  const message = template.generateBody(mailInfo);
  const subject = template.generateSubject(mailInfo);

  const mailOptions = {
    from: accountEmail,
    to: to,
    subject: subject,
    html: message,
  };

  transporter.sendReminderEmail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }  });
};
