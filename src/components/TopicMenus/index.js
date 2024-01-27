// Importing necessary dependencies
import clsx from "clsx";
import React from "react";

// Importing local CSS module for styling
import styles from "./styles.module.css";

// Data structure containing topics for the menu
const FeatureList = [
  // HTML topic
  {
    title: "HTML",
    imgSrc: "img/menu_icons/html.svg",
    path: "/docs/category/html",
  },
  // CSS topic
  {
    title: "CSS",
    imgSrc: "img/menu_icons/css.svg",
    path: "/docs/category/css",
  },
  // JavaScript topic
  {
    title: "JavaScript",
    imgSrc: "img/menu_icons/javascript.svg",
    path: "/docs/category/javascript",
  },
  // ReactJS topic
  {
    title: "ReactJS",
    imgSrc: "img/menu_icons/reactjs.svg",
    path: "/docs/category/reactjs",
  },
  // NodeJS topic
  {
    title: "NodeJS",
    imgSrc: "img/menu_icons/nodejs.svg",
    path: "/docs/category/nodejs",
  },
  // MongoDB topic
  {
    title: "MongoDB",
    imgSrc: "img/menu_icons/mongodb.svg",
    path: "/docs/category/mongodb",
  },
  // ExpressJS topic
  {
    title: "ExpressJS",
    imgSrc: "img/menu_icons/expressjs.svg",
    path: "/docs/category/expressjs",
  },
  // Git & GitHub topic
  {
    title: "Git & GitHub",
    imgSrc: "img/menu_icons/github.svg",
    path: "/docs/category/github",
  },
  // Interview topic
  {
    title: "Interview",
    imgSrc: "img/menu_icons/interview.png",
    path: "/docs/category/interview",
  },
  // Tips & Tools topic
  {
    title: "Tips & Tools",
    imgSrc: "img/menu_icons/tips.png",
    path: "/docs/category/tips-and-tools",
  },
  // C programming topic
  {
    title: "C",
    imgSrc: "img/menu_icons/c.svg",
    path: "/docs/category/c-programming",
  },
  // C++ programming topic
  {
    title: "C++",
    imgSrc: "img/menu_icons/c++.svg",
    path: "/docs/category/cpp-programming",
  },
  // Python programming topic
  {
    title: "Python",
    imgSrc: "img/menu_icons/python.svg",
    path: "/docs/category/python-programming",
  },
  // Data Structures topic
  {
    title: "Data Structures",
    imgSrc: "img/menu_icons/dsa.png",
    path: "/docs/category/data-structures",
  },
  // TypeScript topic
  {
    title: "TypeScript",
    imgSrc: "img/menu_icons/typescript.svg",
    path: "/docs/category/typescript",
  },
  // AWS topic
  {
    title: "AWS",
    imgSrc: "img/menu_icons/aws.jpeg",
    path: "/docs/category/aws",
  },
  // Bun topic
  {
    title: "Bun",
    imgSrc: "img/menu_icons/bun.svg",
    path: "/docs/category/bun",
  },
];

// Functional component TopicMenu for rendering individual topics in the menu
function TopicMenu({ imgSrc, title, path }) {
  return (
    <div
      className={clsx("col col--3")}
      onClick={() => {
        // Redirecting to the specified path on click
        window.location = path;
      }}
    >
      <div className={styles.menu}>
        {/* Rendering topic image */}
        <img src={imgSrc} className={styles.featureSvg} role="img" />
        {/* Rendering topic title */}
        <h2 className={styles.menuTitle}>{title}</h2>
      </div>
    </div>
  );
}

// Functional component TopicMenus for rendering the entire topics menu section
export default function TopicMenus() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {/* Mapping through FeatureList and rendering each topic */}
          {FeatureList.map((props, idx) => (
            <TopicMenu key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
