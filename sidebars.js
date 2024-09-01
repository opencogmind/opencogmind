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
    label: 'Causal AI',
    items: [
      'causalai/How-to-Get-Started',
    ],
  },
  {
    type: 'category',
    label: 'Fundamentals',
    items: [
      'causalai/Fundamentals/CorrelationIsNotCausation',
      'causalai/Fundamentals/Principles-Of-AGI',
      'causalai/Fundamentals/Levels-Of-AGI',
      'causalai/Fundamentals/Evaluating-AGI',
      'causalai/Fundamentals/Risk-Assessment',
      'causalai/Fundamentals/AutonomyVsCapability',
    ],
  },
  {
    type: 'category',
    label: 'tutorial-extras',

    label: 'Research',

    items: [
      'causalai/Research/Sparks-Of-AGI'
  
    ],
  },],

  tutorialSidebar2: [{
    type: 'category',
    label: 'Domain',
    items: [
      'domain/Welcome',
    ],
  },
  {
    type: 'category',
    label: 'CeFi-Mainstream',
    items: [
      'domain/CeFi-Mainstream/marketparticipants/Market Pariticipants',
      'domain/CeFi-Mainstream/Principles-Of-AGI',
      'domain/CeFi-Mainstream/Levels-Of-AGI',
      'domain/CeFi-Mainstream/Evaluating-AGI',
      'domain/CeFi-Mainstream/Risk-Assessment',
      'domain/CeFi-Mainstream/AutonomyVsCapability',
    ],
  },
  {
    type: 'category',
    label: 'CeFi-Alternative',
    items: [
      'domain/CeFi-Alternative/Definitions',
      'domain/CeFi-Alternative/Principles-Of-AGI',
      'domain/CeFi-Alternative/Levels-Of-AGI',
      'domain/CeFi-Alternative/Evaluating-AGI',
      'domain/CeFi-Alternative/Risk-Assessment',
      'domain/CeFi-Alternative/AutonomyVsCapability',
    ],
  },
  {
    type: 'category',
    label: 'DeFi',
    items: [
      'domain/DeFi/Definitions',
      'domain/DeFi/Principles-Of-AGI',
      'domain/DeFi/Levels-Of-AGI',
      'domain/DeFi/Evaluating-AGI',
      'domain/DeFi/Risk-Assessment',
      'domain/DeFi/AutonomyVsCapability',
    ],
  },
  {
    type: 'category',
    label: 'Web3',
    items: [
      'domain/Web3/Definitions',
      'domain/Web3/Principles-Of-AGI',
      'domain/Web3/Levels-Of-AGI',
      'domain/Web3/Evaluating-AGI',
      'domain/Web3/Risk-Assessment',
      'domain/Web3/AutonomyVsCapability',
    ],
  },
],

tutorialSidebar3: [{
  type: 'category',
  label: 'Algo Trading',
  items: [
    'algotrade/gettingstarted',
  ],
},
{
  type: 'category',
  label: 'Fundamentals',
  items: [
    'algotrade/Fundamentals/Definitions',
    'algotrade/Fundamentals/Principles-Of-AGI',
    'algotrade/Fundamentals/Levels-Of-AGI',
    'algotrade/Fundamentals/Evaluating-AGI',
    'algotrade/Fundamentals/Risk-Assessment',
    'algotrade/Fundamentals/AutonomyVsCapability',
  ],
},
],

  mySidebar: [
    {type: 'category',
    label: 'AGI',
    items: [
    
      'agi/State-Of-The-Art',
      // Add more documentation links as needed
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
      }
    ],},
    {
      type: 'category',
      label: 'tutorial-extras',
  
      label: 'Research',
  
      items: [
        'agi/Research/Sparks-Of-AGI'
    
      ],
    }
    ],
    
  mySidebar2: [{type: 'category',
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


  mySidebar3: [{type: 'category',
  label: 'Book',
  items: [
  
    'Book/Release-Schedule',
    // Add more documentation links as needed
  ],},
  
  ],

};
 
module.exports = sidebars;
