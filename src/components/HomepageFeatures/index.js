import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'AI Safety',
    link: '/docs/aisafety',
    Svg: require('@site/static/img/1.svg').default,
    description: (
      <>
        Learn AI Safety for self evolving AGI.
      </>
    ),
  },
  {
    title: 'AI -) AGI',
    link: '/docs/intro',
    Svg: require('@site/static/img/2.svg').default,
    description: (
      <>
        Follow the path to AGI.
      </>
    ),
  },
  {
    title: 'Apps',
    link: '/blog',
    Svg: require('@site/static/img/3.svg').default,
    description: (
      <>
        Learn to Build & Evaluate Safe AI apps.
      </>
    ),
  },
];

function Feature({ link, Svg, title, description}) {
  return (
    
    <div className={clsx('col col--4', styles.flexContainer)}>
  <div className={styles.flexItem}>
    <Svg className={styles.featureSvg} role="img" />
  </div>
  <div className={clsx('content', styles.flexItem1)}>
    <a style={{color: 'rgb(130, 129, 239)'}} href={link}><h3>{title}</h3></a>
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
