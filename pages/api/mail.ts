import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
    message: string;
};

// Configure Nodemailer with your SMTP settings
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // e.g., 'smtp.gmail.com'
    port: Number(process.env.SMTP_PORT), // e.g., 587
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER, // SMTP username
        pass: process.env.SMTP_PASS, // SMTP password
    },
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { name, email, message }: { name: string; email: string; message: string } = req.body;
    const mailOptions = {
        from: process.env.MAIL_FROM, // Sender address
        to: process.env.MAIL_TO, // List of receivers
        subject: `${name.toUpperCase()} sent you a message from Portfolio`,
        text: `Email => ${email}\n\n${message}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br>${message.replace(/\r\n/g, "<br>")}</p>`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Your message was sent successfully." });
    } catch (err) {
        console.error("Error sending email:", err);
        res.status(500).json({ message: "There was an error sending your message. Please try again later." });
    }
}
