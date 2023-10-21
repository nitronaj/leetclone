// // theme/index.js
import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';
import { withProse } from '@nikolovlazar/chakra-ui-prose';

import { tabsTheme } from './components/Tabs';
import code from './prose/code';
import p from './prose/p';
import pre from './prose/pre';

// // Component style overrides
// import Button from './components/button';
// // Foundational style overrides
// import borders from './foundations/borders';
// // Global style overrides
// import styles from './styles';

// const overrides = {
//   styles,
//   borders,
//   // Other foundational style overrides go here
//   components: {
//     Button,
//     // Other components go here
//   },
// };

export default extendTheme(
  withDefaultColorScheme({
    colorScheme: 'purple',
    components: ['Spinner'],
  }),
  {
    colors: {
      gray: {
        10: '#fAfAfA',
        20: '#f0f0f0',
      },
      blue: {
        60: '#007aff',
      },
      eerie: {
        800: '#1e1e1e',
      },
    },
    components: {
      Tabs: tabsTheme,
    },
  },
  withProse({
    baseStyle: (props) => {
      return {
        code: code.baseStyle(props),
        p: p.baseStyle,
        pre: pre.baseStyle(props),
      };
    },
  })
);
