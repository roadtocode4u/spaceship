import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "HTML",
    imgSrc: "img/menu_icons/html.svg",
    path: "/docs/category/html",
  },
  {
    title: "CSS",
    imgSrc: "img/menu_icons/css.svg",
    path: "/docs/category/css",
  },
  {
    title: "JavaScript",
    imgSrc: "img/menu_icons/javascript.svg",
    path: "/docs/category/javascript",
  },
  {
    title: "ReactJS",
    imgSrc: "img/menu_icons/reactjs.svg",
    path: "/docs/category/reactjs",
  },
  {
    title: "NodeJS",
    imgSrc: "img/menu_icons/nodejs.svg",
    path: "/docs/category/nodejs",
  },
  {
    title: "MongoDB",
    imgSrc: "img/menu_icons/mongodb.svg",
    path: "/docs/category/mongodb",
  },
  {
    title: "ExpressJS",
    imgSrc: "img/menu_icons/expressjs.svg",
    path: "/docs/category/expressjs",
  },
  {
    title: "Git & GitHub",
    imgSrc: "img/menu_icons/github.svg",
    path: "/docs/category/github",
  },
  {
    title: "Interview",
    imgSrc: "img/menu_icons/interview.png",
    path: "/docs/category/interview",
  },
  {
    title: "Tips & Tools",
    imgSrc: "img/menu_icons/tips.png",
    path: "/docs/category/tips-and-tools",
  },
  {
    title: "C",
    imgSrc: "img/menu_icons/c.svg",
    path: "/docs/category/c-programming",
  },
  {
    title: "C++",
    imgSrc: "img/menu_icons/c++.svg",
    path: "/docs/category/c++-programming",
  },
  {
    title: "Python",
    imgSrc: "img/menu_icons/python.svg",
    path: "/docs/category/python-programming",
  },
  {
    title: "Data Structures",
    imgSrc: "img/menu_icons/dsa.png",
    path: "/docs/category/dsa",
  },
  {
    title: "TypeScript",
    imgSrc: "img/menu_icons/typescript.svg",
    path: "/docs/category/typescript",
  },
  {
    title: "AWS",
    imgSrc: "img/menu_icons/aws.jpeg",
    path: "/docs/category/aws",
  },
  {
    title: "Bun",
    imgSrc: "img/menu_icons/bun.svg",
    path: "/docs/category/bun",
  },
];

function TopicMenu({ imgSrc, title, path }) {
  return (
    <div
      className={clsx("col col--3")}
      onClick={() => {
        window.location = path;
      }}
    >
      <div className={styles.menu}>
        <img src={imgSrc} className={styles.featureSvg} role="img" />
        <h2 className={styles.menuTitle}>{title}</h2>
      </div>
    </div>
  );
}

export default function TopicMenus() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <TopicMenu key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
