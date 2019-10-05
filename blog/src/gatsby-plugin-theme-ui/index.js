import colors from './colors';
import styles from './styles';

const theme = {
  initialColorMode: 'pink',
  colors,
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  sizes: {
    container: 1024,
  },
  styles,
};

export default theme;
