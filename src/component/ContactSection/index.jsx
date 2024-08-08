import React, { useState, useRef } from "react";
import style from "./style.module.scss";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactSchema } from "../../ValidationSchema/ContactSchema";

export const ContactSection = () => {
  const [done, setDone] = useState(false);
  const formRef = useRef();
  // Use React Hook Form with Yup resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ContactSchema),
  });

  // Handle form submission
  const onSubmit = (data) => {
    emailjs
      .sendForm(
        "service_fudgz0v",
        "template_f60ohxp",
        formRef.current,
        "vNpoSUmTKroGKzAsZ"
      )
      .then(
        () => {
          setDone(true);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <section id="Contact">
      <div className={style.wrapper}>
        <div className={style.content}>
          <h1>Let's work together</h1>
          <div className={style.contentItem}>
            <div>
              <h2>Mail</h2>
              <p>nguyenphucit142002@gmail.com</p>
            </div>
            <div>
              <h2>Phone</h2>
              <p>+84 878736185</p>
            </div>
            <div>
              <h2>Address</h2>
              <p>TP HCM, VN</p>
            </div>
          </div>
        </div>
        <div className={style.form}>
          <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
            <input
              type="text"
              placeholder="name"
              {...register("user_name")}
              name="user_name"
            />
            {errors.user_name && (
              <p className={style.errorMessage}>{errors.user_name.message}</p>
            )}

            <input
              type="email"
              placeholder="email"
              name="user_email"
              {...register("user_email")}
            />
            {errors.user_email && (
              <p className={style.errorMessage}>{errors.user_email.message}</p>
            )}

            <textarea
              placeholder="message"
              {...register("message")}
              name="message"
            />
            {errors.message && (
              <p className={style.errorMessage}>{errors.message.message}</p>
            )}

            {!done ? (
              <button type="submit">Submit</button>
            ) : (
              <p style={{ color: "#48a845" }}>Successfully sent request</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
