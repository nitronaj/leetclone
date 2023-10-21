import { cssVar, defineStyle } from '@chakra-ui/styled-system';
import { badgeTheme } from '@chakra-ui/theme/components/badge';

const $bg = cssVar('badge-bg');
const $color = cssVar('badge-color');
const $shadow = cssVar('badge-shadow');

const { variants, defaultProps } = badgeTheme;

const baseStyle = defineStyle((props) => {
  return {
    '&::before, &::after': {
      content: '""',
    },
    fontWeight: 'medium',
    fontFamily: 'mono',
    fontSize: 'xs',
    px: '0.2em',
    py: '0.05em',
    borderRadius: 'md',
    borderWidth: '1px',
    bg: $bg.reference,
    color: $color.reference,
    boxShadow: $shadow.reference,

    ...variants?.subtle({ ...props, ...defaultProps }),
  };
});

const codeStyle = { baseStyle };

export default codeStyle;
