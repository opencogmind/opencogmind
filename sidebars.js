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
    label: 'Fundamentals',
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
      'agi/Research/Sparks-Of-AGI'
  
    ],
  },],

  mySidebar: [{type: 'category',
  label: 'AI Safety',
  items: [
    'aisafety/Why-Need-AI-Safety',
    // Add more documentation links as needed
    {
      type: 'category',
      label: 'AI-Safety-101',
      items: [
        'aisafety/AI-Safety-101/AI-Safety-Intro',
        
        {
          type: 'category',
          label: 'Define-Risk',
          items: [
            'aisafety/AI-Safety-101/Define-Risk/Definition',
            'aisafety/AI-Safety-101/Define-Risk/Rogue-AI'
            
          ],
          
        },
        {
          type: 'category',
          label: 'Monitor-Risk',
          items: [
            'aisafety/AI-Safety-101/Monitor-Risk/Anomaly-Detection',
        'aisafety/AI-Safety-101/Monitor-Risk/Determining-Emergent-Behaviour',
            
          ],
          
        },
        {
          type: 'category',
          label: 'Observability-Of-Risk',
          items: [
            'aisafety/AI-Safety-101/Observability-Of-Risk/DetermineAttackResistance',
        
            
          ],
          
        },
        {
          type: 'category',
          label: 'Operations-Control-Risk',
          items: [
            'aisafety/AI-Safety-101/Operations-Control-Risk/Incorporating-Honesty',
            
          ],
          
        },
        {
          type: 'category',
          label: 'System-Level-AI-Safety',
          items: [
            'aisafety/AI-Safety-101/System-Level-AI-Safety/Systemic-AISafety',
        
            
          ],
          
        },
        {
          type: 'category',
          label: 'X-Risks',
          items: [
            'aisafety/AI-Safety-101/X-Risks/X-Risks',
        
            
          ],
          
        },
        
      ],
      
    },
    {
      type: 'category',
      label: 'Research',
      items: [
        'aisafety/Research/Research1'
    
      ],
    },
  ],},
  
  
 ],

  mySidebar2: [{type: 'category',
  label: 'Apps',
  items: [
  
    'Apps/welcomeapps',
    // Add more documentation links as needed
    {
      type: 'category',
      label: 'Anomaly-Detection',
      items: [
        'Apps/Anomaly-Detection/welcomead',
        {
          type: 'category',
          label: 'Detect-FakeNews',
          items: [
            'Apps/Anomaly-Detection/Detect-FakeNews/detectFakeNews'
        
          ],
        },
        {
          type: 'category',
          label: 'Detect-TimeSeries-Anomalies',
          items: [
            'Apps/Anomaly-Detection/Detect-TimeSeries-Anomalies/timeseriesAnomaly'
        
          ],
        },
        {
          type: 'category',
          label: 'Detect-CounterFiets',
          items: [
            'Apps/Anomaly-Detection/Detect-CounterFiets/DetectingCouterfiets'
        
          ],
        },
        {
          type: 'category',
          label: 'Find-God-Particle',
          items: [
            'Apps/Anomaly-Detection/Find-God-Particle/SearchForGodParticle'
        
          ],
        },
         
      ],
    },
    {
      type: 'category',
      label: 'Forecasting',
      items: [
        
        'Apps/Forecasting/welcomeforecasting',
        {
          type: 'category',
          label: 'Demand-Forecasting',
          items: [
            'Apps/Forecasting/Demand-Forecasting/DF_App1'
        
          ],
        },
         
        {
          type: 'category',
          label: 'Stock-Price-Prediction',
          items: [
            'Apps/Forecasting/Finance-Time-Series/Stock-Price-Prediction/StockForecastingApp01',
            'Apps/Forecasting/Finance-Time-Series/Stock-Price-Prediction/StockForecastingApp02'
          ],
        },
        
        
      ],
  
    },
    {
      type: 'category',
      label: 'Reinforcement-Learning',
      items: [
  
        
        'Apps/Reinforcement-Learning/welcomeRHLF',
        {
          type: 'category',
          label: 'RLHF',
          items: [
            'Apps/Reinforcement-Learning/RLHF/RLHFIntro'
        
          ],
        },
         
  
      ],
    },
  ],},
  ],
  
  demo: [{ type:'category', label:'demo',
          items:[
            'demo/intro',
          ],},],
  

 
 

  mySidebar3: [{type: 'category',
  label: 'Book',
  items: [
  
    'Book/Release-Schedule',
    // Add more documentation links as needed
  ],},
  
  ],

};
 
module.exports = sidebars;
