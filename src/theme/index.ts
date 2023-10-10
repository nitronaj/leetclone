// // theme/index.js
import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

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
  })
);
