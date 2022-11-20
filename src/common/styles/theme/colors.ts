type ObjectColors = {
  main: string;
  light: string;
  dark: string;
};

export type ColorsType = {
  primary: ObjectColors;
  secondary: ObjectColors;
  texts: ObjectColors;
  background: string;
};

const colors = {
  primary: {
    main: '#043959',
    light: '#0578A6',
    dark: '#035373',
  },
  secondary: {},
  texts: {
    main: '#E4EEF2',
    dark: '#0588A6',
  },
  background: '',
} as ColorsType;

export { colors };
