import { cssVar, defineStyle } from '@chakra-ui/styled-system';
import { badgeTheme } from '@chakra-ui/theme/components/badge';

const $bg = cssVar('badge-bg');
const $color = cssVar('badge-color');
const $shadow = cssVar('badge-shadow');

const { variants, defaultProps } = badgeTheme;

const baseStyle = defineStyle((props) => {
  return {
    fontWeight: 'medium',
    fontFamily: 'mono',
    fontSize: 'xs',
    py: '0.5em',
    paddingLeft: 4,
    my: 4,
    borderRadius: 'sm',
    borderWidth: '1px',
    whiteSpace: 'pre-wrap',
    bg: $bg.reference,
    color: $color.reference,
    boxShadow: $shadow.reference,

    ...variants?.subtle({ ...props, ...defaultProps }),
  };
});

const preStyle = { baseStyle };

export default preStyle;
