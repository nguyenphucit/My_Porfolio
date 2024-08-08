import * as yup from 'yup'

export const ContactSchema = yup.object({
    user_name: yup.string().required("Name is required"),
    user_email: yup.string().email("Invalid email").required("Email is required"),
    message: yup.string().required("Message is required"),
  });