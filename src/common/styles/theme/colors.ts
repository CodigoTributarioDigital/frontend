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
  primary: {},
  secondary: {},
  texts: {},
  background: '',
} as ColorsType;

export { colors };
