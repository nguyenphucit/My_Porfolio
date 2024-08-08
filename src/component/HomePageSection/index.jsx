import React from "react";
import style from "./style.module.scss";
import { motion } from "framer-motion";
export const HomePageSection = () => {
  return (
    <section id="Homepage">
      <div className={style.wrapper}>
        <div className={style.left}>
          <motion.h2
            initial={{ opacity: 0, y: -300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              delay: 0.2,
              stiffness: 150,
              damping: 50,
            }}
          >
            Nguyen Phuc
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, x: 1300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              delay: 0.2,
              stiffness: 150,
              damping: 50,
            }}
          >
            Frontend and Backend Web Developer
          </motion.h1>
          <motion.div className={style.btnGroup}>
            <motion.a
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                delay: 0.3,
                stiffness: 150,
                damping: 50,
              }}
              href="#FeatureWork"
            >
              See the latest works
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 500 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                delay: 0.3,
                stiffness: 150,
                damping: 50,
              }}
              href="#Contact"
            >
              Contact me
            </motion.a>
          </motion.div>
        </div>
        <div className={style.right}>
          <div className={style.imageBox}>
            <img src="/myportrait.png" alt="" />
          </div>
        </div>
        {/*eslint-disable-next-line */}
        <marquee scrollamount="25">
          Frontend must be gorgeous and backend must be efficient{" "}
        </marquee>
      </div>
    </section>
  );
};
