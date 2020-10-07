import { theme } from '../../../globalStyles/constants'

export const icons = {
  hamburger: {
    viewbox: '0 0 24 24',
    paths: [
      {
        d:
          'M1.5 3.375H22.5C23.328 3.375 24 4.047 24 4.875C24 5.703 23.328 6.375 22.5 6.375H1.5C0.672 6.375 0 5.703 0 4.875C0 4.047 0.672 3.375 1.5 3.375Z',
        primary_fill: `${theme.icon.primary.color}`,
        secondary_fill: `${theme.icon.secondary.color}`
      },
      {
        d:
          'M1.5 10.125H22.5C23.328 10.125 24 10.797 24 11.625C24 12.453 23.328 13.125 22.5 13.125H1.5C0.672 13.125 0 12.453 0 11.625C0 10.797 0.672 10.125 1.5 10.125Z',
        primary_fill: `${theme.icon.primary.color}`,
        secondary_fill: `${theme.icon.secondary.color}`
      },
      {
        d:
          'M1.5 16.875H22.5C23.328 16.875 24 17.547 24 18.375C24 19.203 23.328 19.875 22.5 19.875H1.5C0.672 19.875 0 19.203 0 18.375C0 17.547 0.672 16.875 1.5 16.875Z',
        primary_fill: `${theme.icon.primary.color}`,
        secondary_fill: `${theme.icon.secondary.color}`
      }
    ]
  }
}
