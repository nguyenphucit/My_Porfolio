import React from "react";
import style from "./style.module.scss";

const Skill = ({ source, content, description }) => {
  return (
    <div className={style.Skill}>
      <img src={source} alt="" />
      <h2>{content}</h2>
      <p>{description}</p>
    </div>
  );
};
export const SkillSection = () => {
  const Skills = [
    {
      source: "/nodejsLogo.png",
      content: "Build Backend Servers with Node.js",
      description:
        "Harness the power of Node.js to create dynamic, scalable backend servers that efficiently handle client-side HTTP requests.",
    },
    {
      source: "/reactjsLogo.png",
      content: "Design Interactive UIs with React.js",
      description:
        "Leverage React.js to build responsive, user-friendly frontends. Seamlessly manage server responses and API requests for a smooth user experience.",
    },
    {
      source: "/nestjsLogo.png",
      content: "Develop Scalable Servers with NestJS",
      description:
        "Upgrade your backend capabilities with NestJS. Build well-structured, maintainable servers that enhance performance and scalability.",
    },
    {
      source: "/springbootLogo.png",
      content: "Powerful Backends with Java Spring",
      description:
        "Utilize Java Spring Boot to construct efficient, structured backend systems",
    },
    {
      source: "/mysqlLogo.png",
      content: "Manage Databases with MySQL",
      description:
        "Implement MySQL to design and manage databases with ease. Ensure data integrity and optimize performance for your applications.",
    },
    {
      source: "/sassLogo.png",
      content: "Style Your Web Pages with SCSS",
      description:
        "Employ SCSS to write clean, maintainable CSS. Improve your website's styling efficiency and make your UI stand out.",
    },
  ];

  return (
    <section id="My Skills">
      <div className={style.wrapper}>
        {Skills.map((item) => (
          <Skill
            description={item.description}
            content={item.content}
            source={item.source}
            key={item.source}
          />
        ))}
      </div>
    </section>
  );
};
