import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  const heroStyle = {
    backgroundImage: 'url("/img/1.png")', // Replace with the path to your image
    
  };
  return (
    
    <header className={clsx('hero ', styles.heroBanner)} style={heroStyle}>
      <div className="container">
        <h1 style={{color: 'darkgrey', textAlign:'center' }} className="hero__title">{siteConfig.title}</h1>
        <p style={{color: 'darkgrey' }} className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className=" button button--secondary button--lg"
            to="/docs/intro" style={{color: 'white', background: 'linear-gradient(to right, rgba(255, 0, 187, 0.72), rgba(212, 79, 212, 0.78) 51%)'}}>
            Read about OpenCogMind
          </Link>
        </div>
      </div>
    </header>
    
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
