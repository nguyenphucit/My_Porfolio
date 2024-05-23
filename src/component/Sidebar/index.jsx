import React, { useState } from "react";
import { motion, spring } from "framer-motion";
import style from "./index.module.scss";
import { Menu, Clear } from "@mui/icons-material";
const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      delay: 0.1,
      type: spring,
      stiffness: 500,
      damping: 50,
    },
  },
  closed: {
    clipPath: "circle(20px at 50px 50px)",
    transition: {
      delay: 0.1,
      type: spring,
      stiffness: 500,
      damping: 50,
    },
  },
};
const buttonVariants = {
  closeBtn: {
    scale: [1, 0, 1],
    transition: {
      duration: 0.5, // thời gian chuyển đổi
      times: [0, 0.5, 1], // thời điểm thực hiện scale
    },
  },
  openBtn: {
    scale: [1, 0, 1],
    transition: {
      duration: 0.5,
      times: [0, 0.5, 1],
    },
  },
};
const linkVariants = {
  open: {
    transition: {
      staggerChildren: 0.15,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};
const ToggleButton = ({ setisOpen, isOpen }) => {
  return (
    <motion.div
      className={style.toggleBtn}
      initial="false"
      animate={isOpen ? "openBtn" : "closeBtn"}
    >
      <motion.button
        onClick={() => setisOpen((prev) => !prev)}
        key={isOpen ? "openBtn" : "closeBtn"}
        variants={buttonVariants}
      >
        {isOpen ? <Clear /> : <Menu />}
      </motion.button>
    </motion.div>
  );
};
const Links = ({ isOpen }) => {
  const url = ["Homepage", "My Skills", "FeatureWork", "Contact"];
  return (
    <motion.div
      className={style.links}
      initial="false"
      animate={isOpen ? "open" : "closed"}
      variants={linkVariants}
    >
      {url.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.2 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export const Sidebar = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <motion.div
      initial="false"
      animate={isOpen ? "open" : "closed"}
      className={style.sidebar}
    >
      <motion.div className={style.bg} variants={variants}>
        <Links isOpen={isOpen} />
      </motion.div>
      <ToggleButton setisOpen={setisOpen} isOpen={isOpen} />
    </motion.div>
  );
};
