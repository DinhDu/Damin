module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    letterSpacing: {
      tightest: '-.075em',
       tighter: '-.05em',
      tight: '-.025em',
       normal: '0',
      wide: '.025em',
       wider: '.05em',
      widest: '.1em',
      wides: '-0.75',
     },
    fontSize: {
      '1': '14px',
      '2': '18px',
    },
    zIndex: {
      '0': 0,
      '10': 10,
      '19': 19,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
      '75': 75,
      '100': 100,
      'auto': 'auto',
    },
    extend: {
      width: {
        '500': '500px',
        '450': '450px',
        '400': '400px',
        '350': '350px',
        '300': '300px',
        '250': '250px',
        '224': '224px',
        '202': '202px',
        '200': '200px',
        '150': '150px',
        '100': '100px',
        '50': '50px',
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
        '24': '24px',
       },
    },
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
      '7': '64px',
      '8': '517px',
      '9': '256px',
      '10': '220px',
    },
    variants: {
      extend: {
        backgroundColor: ['active'],
      },
    },
    plugins: [],
  },
}

