import React, { useRef } from "react";
import style from "./style.module.scss";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";

const SingleWork = ({ Single_work }) => {
  const sectionRef = useRef();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section id="FeatureWork">
      <div className={style.work}>
        <div className={style.Workwrapper}>
          <div className={style.workImg} ref={sectionRef}>
            {/* <img src={Single_work.source} alt="" /> */}
            <video
              src={Single_work.source}
              controls
              poster={Single_work.poster}
            ></video>
          </div>
          <motion.div style={{ y }} className={style.workDesc}>
            <h1 className={style.workTitle}>{Single_work.title}</h1>
            <p>{Single_work.description}</p>
            <a href={Single_work.git} target="_blank" rel="noreferrer">
              see source
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export const FeatureWorkSection = () => {
  const Works = [
    {
      title: "Facebook Clone",
      description:
        "My Facebook Clone is a comprehensive social media web application that mirrors the fundamental features of Facebook.",
      source: "/FacebookDemo.mp4",
      poster: "",
      git: "https://github.com/nguyenphucit/facebookClone",
    },
    {
      title: "Kahoot Clone",
      description:
        "My Kahoot Clone is an interactive quiz game platform that replicates the essential features of Kahoot.",
      source: "/KahootDemo2.mp4",
      poster: "/kahootBG.jpg",
      git: "https://github.com/nguyenphucit/kahootClone",
    },
  ];

  const WorkRef = useRef();
  const { scrollYProgress } = useScroll({
    target: WorkRef,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className={style.featureWork} ref={WorkRef}>
      <div className={style.wrapper}>
        <h1>Feature work</h1>
        <motion.div style={{ scaleX }} className={style.progress}></motion.div>
      </div>
      {Works.map((item) => (
        <SingleWork Single_work={item} key={item.source} />
      ))}
    </div>
  );
};
