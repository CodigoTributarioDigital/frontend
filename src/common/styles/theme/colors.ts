type ObjectColors = {
  main: string;
  light: string;
  dark: string;
};

export type ColorsType = {
  primary: ObjectColors;
  secondary: ObjectColors;
  texts: ObjectColors | any;
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
    light: '#0BA8CC',
    grey: '#9C9C9C',
  },
  background: '#F8F8F8',
} as ColorsType;

export { colors };
