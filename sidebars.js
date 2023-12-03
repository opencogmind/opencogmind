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
      'agi/intro',
    ],
  },
  {
    type: 'category',
    label: 'History',
    items: [
      'agi/History/congratulations',
      'agi/History/create-a-blog-post',
      'agi/History/create-a-document',
      'agi/History/create-a-page',
      'agi/History/deploy-your-site',
    ],
  },
  {
    type: 'category',
    label: 'demos',
    items: [
      'agi/demos/intro',
      
    ],
  },
  {
    type: 'category',
    label: 'tutorial-extras',

    label: 'Research',

    items: [
      'agi/Research/manage-docs-versions',
      'agi/Research/translate-your-site',
  
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
  
    'Apps/welcome',
    // Add more documentation links as needed
  ],},
  {
    type: 'category',
    label: 'Anomaly-Detection',
    items: [
      'Apps/Anomaly-Detection/congratulations',
      'Apps/Anomaly-Detection/create-a-blog-post',
      'Apps/Anomaly-Detection/create-a-document',
      'Apps/Anomaly-Detection/create-a-page',
      'Apps/Anomaly-Detection/deploy-your-site',
    ],
  },
  {
    type: 'category',
    label: 'Forecasting',
    items: [
      'Apps/Forecasting/manage-docs-versions',
      'Apps/Forecasting/translate-your-site',
    ],

  },
  {
    type: 'category',
    label: 'Reinforcement Learning',
    items: [
      'Apps/Reinforcement Learning/RLHF/manage-docs-versions',
    ],
  },],
  
  demo: [{ type:'category', label:'demo',
          items:[
            'demo/intro',
          ],},],
  

 
 

  mySidebar3: [{type: 'category',
  label: 'Book',
  items: [
  
    'Book/publish',
    // Add more documentation links as needed
  ],},
  
  ],

};
 
module.exports = sidebars;
