// ** MUI Imports
import {Theme} from '@mui/material/styles'

const GlobalStyles = (theme: Theme) => {
  return {
    '.ps__rail-y': {
      zIndex: 1,
      right: '0 !important',
      left: 'auto !important',
      '&:hover, &:focus, &.ps--clicking': {
        backgroundColor: theme.palette.mode === 'light' ? '#E4E5EB !important' : '#423D5D !important'
      },
      '& .ps__thumb-y': {
        right: '3px !important',
        left: 'auto !important',
        backgroundColor: theme.palette.mode === 'light' ? '#C2C4D1 !important' : '#504B6D !important'
      },
      '.layout-vertical-nav &': {
        '& .ps__thumb-y': {
          width: 4,
          backgroundColor: theme.palette.mode === 'light' ? '#C2C4D1 !important' : '#504B6D !important'
        },
        '&:hover, &:focus, &.ps--clicking': {
          backgroundColor: 'transparent !important',
          '& .ps__thumb-y': {
            width: 6
          }
        }
      }
    },

    //scrollbar
    '*::-webkit-scrollbar': {
      width: '10px',
      height: '8px',
    },
    '*::-webkit-scrollbar-track': {
      background: 'inherit',
      boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.primary.light,
      borderRadius: '20px',
      border: theme.palette.primary.light,
    },
    '*::-webkit-scrollbar-corner': {
      background: 'inherit',
    },

    '#nprogress': {
      pointerEvents: 'none',
      '& .bar': {
        left: 0,
        top: 0,
        height: 3,
        width: '100%',
        zIndex: 2000,
        position: 'fixed',
        backgroundColor: theme.palette.primary.main
      }
    }
  }
}

export default GlobalStyles
