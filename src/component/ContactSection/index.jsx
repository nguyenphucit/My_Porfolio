import React from "react";
import style from "./style.module.scss";
export const ContactSection = () => {
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
              <p>+08 78736185</p>
            </div>
            <div>
              <h2>Address</h2>
              <p>TP HCM , VN</p>
            </div>
          </div>
        </div>
        <div className={style.form}>
          <form action="">
            <input type="text" name="" id="" placeholder="name" />
            <input type="email" placeholder="email" />
            <textarea name="" id="" placeholder="message"></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};
