import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Learn from Scratch',
    imgSrc: 'img/learn-from-scratch.png',
    description: (
      <>
        Spaceship helps you to learn various concepts of computer science from scratch in documentation format.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    imgSrc: 'img/focus-on-what-matters.png',
    description: (
      <>
        For beginners, it is difficult to find the right resources to learn from. Spaceship helps you to focus on what matters.
      </>
    ),
  },
  {
    title: 'Open Source',
    imgSrc: 'img/open-source.png',
    description: (
      <>
        Spaceship is an open source project. You can contribute to the project and help others to learn.
      </>
    ),
  },
];

function Feature({imgSrc, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgSrc} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
