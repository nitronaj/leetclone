// // theme/index.js
import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

import { tabsTheme } from './components/Tabs';

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
        20: '#f0f0f0',
      },
      blue: {
        60: '#007aff',
      },
    },
    components: {
      Tabs: tabsTheme,
    },
  }
);
