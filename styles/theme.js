const unit = 4;

export const fonts = {
  base:
    'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
  size: {
    small: '12px',
    default: '14px',
    medium: '18px',
    large: '24px'
  }
};

export const colors = {
  white: '#ffffff',
  black: '#000000',
  gray: '#4e5974',
  grayLight: '#a0aaaD',
  grayLightest: '#e1e6ea',
  primary: '#0073e6',
  secondary: '#ffec00'
};

export const spacing = {
  xsmall: unit * 2 + 'px',
  small: unit * 4 + 'px',
  medium: unit * 6 + 'px',
  large: unit * 8 + 'px'
};

export const breakpoints = {
  xsmall: '576px',
  small: '768px',
  medium: '992px',
  large: '1200px'
};
