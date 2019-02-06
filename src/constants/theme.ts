
interface BasicColor {
  default: string;
  primary: string;
  action: string;
}

interface Color extends BasicColor {
  pageBackground: string,
  mainFont: string,
  secondaryFont: string
}

interface Shadow {
  default: string
}

interface Transition {
  default: '0.35s ease-in-out'
}

export interface Theme {
  color: Color,
  colorHover: BasicColor,
  shadow: Shadow,
  transition: Transition
}

export const THEME: Theme = {
  color: {
    default: 'rgba(255, 255, 255, 0.15)',
    primary: 'rgb(209, 142, 66)',
    action: '#e74c3c',

    pageBackground: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)',
    mainFont: '#FFFFFF',
    secondaryFont: '#ecf0f1',
  },
  colorHover: {
    default: 'rgba(52, 152, 219, 0.2)',
    primary: '#e67e22',
    action: '#c0392b',
  },
  shadow: {
    default: '0px 3px 20px rgba(255, 255, 255, 0.05)'
  },
  transition: {
    default: '0.35s ease-in-out'
  }
}