import React from 'react';
import Tokens from './Tokens';

const generateScrollStyles = (theme: any) =>
  ({
    scrollbarWidth: 'none', //firefox
    '&::-webkit-scrollbar': {
      opacity: 0,
    },
    '&::-webkit-scrollbar-thumb': {
      opacity: 0,
    },
    '&:hover': {
      scrollbarWidth: 'thin', //firefox
      scrollbarColor: Tokens.colors[`${theme.palette.type}Theme`].materialTableScrollColor, //firefox
      '&::-webkit-scrollbar': {
        opacity: 1,
        width: theme.spacing(0.75),
        height: theme.spacing(0.75),
        borderRadius: theme.spacing(2.5),
        backgroundColor: 'transparent',
      },
      '&::-webkit-scrollbar-thumb': {
        opacity: 0,
        backgroundColor: Tokens.colors[`${theme.palette.type}Theme`].materialTableScrollColor,
        borderRadius: theme.spacing(2.5),
        borderColor: 'transparent',
      },
      '&::-webkit-scrollbar-corner': { background: 'transparent' },
    },
  } as React.CSSProperties);

export default generateScrollStyles;
