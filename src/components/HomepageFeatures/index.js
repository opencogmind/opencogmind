import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'AI : Current State',
    Svg: require('@site/static/img/1.svg').default,
    description: (
      <>
        Follow AI-current state-of-the-art and need for AGI.
      </>
    ),
  },
  {
    title: 'AI -) AGI',
    Svg: require('@site/static/img/2.svg').default,
    description: (
      <>
        Follow the path from AI to build safe, self thinking AGI machines.
      </>
    ),
  },
  {
    title: 'Apps',
    Svg: require('@site/static/img/3.svg').default,
    description: (
      <>
        Learn and Build Generative AI apps.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    
    <div className={clsx('col col--4', styles.flexContainer)}>
  <div className={styles.flexItem}>
    <Svg className={styles.featureSvg} role="img" />
  </div>
  <div className={clsx('content', styles.flexItem1)}>
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
