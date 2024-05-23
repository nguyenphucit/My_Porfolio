import React, { useRef } from "react";
import style from "./style.module.scss";
import { useScroll, motion, useTransform } from "framer-motion";
export const Parallax = ({ condition }) => {
  const ParallaxRef = useRef();
  const { scrollYProgress } = useScroll({
    target: ParallaxRef,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  console.log(scrollYProgress);
  return (
    <section id={condition}>
      <div
        className={`${condition === "Wedo" ? style.Wedo : style.Wedid} ${
          style.wrapper
        }`}
        ref={ParallaxRef}
      >
        <motion.h1 style={{ y: yText }}>
          {condition === "Wedo" ? "What's i do" : "What's i did"}
        </motion.h1>
        <div className={style.mountains}></div>
        <motion.div style={{ y: yBg }} className={style.planets}></motion.div>
        <motion.div style={{ x: yBg }} className={style.stars}></motion.div>
      </div>
    </section>
  );
};
