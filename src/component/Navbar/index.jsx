import React from "react";
import style from "./index.module.scss";
export const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.wrapper}>
        <div className={style.left}>Nguyen Phuc's Porfolio</div>
        <div className={style.right}>
          <a
            href="https://www.facebook.com/profile.php?id=100009833357572"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/facebookLogo.png" alt="" />
          </a>
          <a
            href="https://github.com/nguyenphucit"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/githubLogo.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
