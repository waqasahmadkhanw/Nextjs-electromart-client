import type { ContactFormValues } from "../validation";

export function formatContactData(
  data: ContactFormValues
) {
  return {
    ...data,
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    subject: data.subject.trim(),
    message: data.message.trim(),
  };
}