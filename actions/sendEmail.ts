"use server";

import React from "react";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // Check if required fields exist
  if (!senderEmail || !message) {
    return {
      error: "Missing required fields",
    };
  }

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  const recipientEmail = process.env.RECIPIENT_EMAIL;

  let data;
  let reactElement;
  try {
    reactElement = React.createElement(ContactFormEmail, {
      message: message as string,
      senderEmail: senderEmail as string,
    });
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error));
  }

  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: recipientEmail as string,
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: reactElement,
    });
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error));
  }

  if (!data) {
    throw new Error("Failed to send email");
  }

  return {
    data,
  };
};
