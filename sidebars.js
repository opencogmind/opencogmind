/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-nocheck

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{
    type: 'category',
    label: 'AGI',
    items: [
      'agi/State-Of-The-Art',
    ],
  },
  {
    type: 'category',
    label: 'History',
    items: [
      'agi/Fundamentals/Definitions',
      'agi/Fundamentals/Principles-Of-AGI',
      'agi/Fundamentals/Levels-Of-AGI',
      'agi/Fundamentals/Evaluating-AGI',
      'agi/Fundamentals/Risk-Assessment',
      'agi/Fundamentals/AutonomyVsCapability',
    ],
  },
  {
    type: 'category',
    label: 'Research',
    items: [
      'agi/Research/Sparks-Of-AGI'
  
    ],
  },],

  mySidebar: [{type: 'category',
  label: 'AI Safety',
  items: [
    'aisafety/welcome',
    // Add more documentation links as needed
  ],},
  {
    type: 'category',
    label: 'AI-Safety-101',
    items: [
      'aisafety/AI-Safety-101/congratulations',
      'aisafety/AI-Safety-101/create-a-blog-post',
      'aisafety/AI-Safety-101/create-a-document',
      'aisafety/AI-Safety-101/create-a-page',
      'aisafety/AI-Safety-101/deploy-your-site',
    ],
  },
  {
    type: 'category',
    label: 'Research',
    items: [
      'aisafety/Research/manage-docs-versions',
      'aisafety/Research/translate-your-site',
  
    ],
  },],

  mySidebar2: [{type: 'category',
  label: 'Apps',
  items: [
  
    'Apps/welcomeapps.',
    // Add more documentation links as needed
  ],},
  {
    type: 'category',
    label: 'Anomaly-Detection',
    items: [
      'Apps/Anomaly-Detection/welcomead',
      'Apps/Anomaly-Detection/Detect FakeNews/01-detectFakeNews',
      'Apps/Anomaly-Detection/Detect Time Series Anomalies/01-timeseriesAnomaly',
      'Apps/Anomaly-Detection/Detect-CounterFiets/01-Detect-Couterfiets',
      'Apps/Anomaly-Detection/Find God Particle/SearchForGodParticle',
    ],
  },
  {
    type: 'category',
    label: 'Forecasting',
    items: [
      
      'Apps/Forecasting/welcomeforecasting',
      'Apps/Forecasting/Demand Forecasting/DF_App1',
      'Apps/Forecasting/Finance Time Series/Stock Price Prediction/StockForecastingApp01',
      'Apps/Forecasting/Finance Time Series/Stock Price Prediction/StockForecastingApp02'
    ],
  },  
  {
    type: 'category',
    label: 'Reinforcement Learning',
    items: [
      'Apps/Reinforcement Learning/RLHF/RHLFwelcome',
      'Apps/Reinforcement Learning/RLHF/RHLF1'
    ],
  }],
  mySidebar3: [{type: 'category',
  label: 'Book',
  items: [
  
    'Book/publish',
    // Add more documentation links as needed
  ],}
  
  ],
};
 
module.exports = sidebars;
