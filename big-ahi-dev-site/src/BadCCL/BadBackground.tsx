import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tokens from './themes/Tokens';
import { Box } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  luiBg: {
    position: 'relative',
    minHeight: '100%',
    overflow: 'hidden',
    backgroundColor: Tokens.opacity.transparentColor,
  },
  scroller: {
    overflowY: 'inherit',
    overflowX: 'auto',
  },
  themeBg: {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: -1,
    overflow: 'hidden',
  },
  bgDecoration: {
    position: 'absolute',
    zIndex: 0,
    top: 0,
    width: 852,
    height: 500,
    '& .decorA': {
      position: 'absolute',
      top: 0,
      left: 0,
      '& path': {
        opacity: theme.palette.type === 'light' ? 0.15 : 0.3,
        fill: Tokens.colors[`${theme.palette.type}Theme`].bgDecorA,
      },
    },
    '& .decorB': {
      position: 'absolute',
      top: 0,
      left: 260,
      '& path': {
        opacity: theme.palette.type === 'light' ? 0.15 : 0.25,
        fill: Tokens.colors[`${theme.palette.type}Theme`].bgDecorB,
      },
    },
  },
  bgGradient: {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    height: 500,
    width: '100%',
    zIndex: -2,
    background: Tokens.colors[`${theme.palette.type}Theme`].themeGradient,
  },
}));

export interface BadBackgroundProps {
  /**
   * Optional: Content wrapped in a ReactNode
   */
  children?: React.ReactNode;
  scroller?: boolean;
}

/**
 * The LuiBackground component should be used to enhance the visuals of a page or component. <br/> <br/>
 * Just like every great background, the LuiBackground component is subtle and should not take away from what is being displayed. It is encouraged to use Material UI's Card component to help achieve this. <br/> <br/>
 * In this repository, we use the component on every story with a Material UI Card to really make our components pop visually.
 */
const BadBackground: React.FC<BadBackgroundProps> = ({ children, scroller = true }) => {
  const classes = useStyles();

  return (
    <Box className={classes.luiBg}>
      <Box className={classes.themeBg} bgcolor="background.default">
        <Box className={classes.bgDecoration}>
          
          {/* <svg
            className="decorA"
            width="531"
            height="415"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0"
              fill="none"
              d="M403.594-68.311c-12.512-13.432-31.164-17.58-47.485-12.28L70.889 10.535C45.446 18.657 21.512 32.368.657 51.795c-75.504 70.331-79.693 188.447-9.362 263.95 70.332 75.504 188.518 79.627 263.95 9.361a187.15 187.15 0 0046.132-67.134L412.479-20.075c6.443-15.905 3.561-34.875-8.885-48.236z"
            />
          </svg>
          <svg
            className="decorB"
            width="633"
            height="372"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0"
              fill="none"
              d="M122.808 231.19c12.07 13.831 30.578 18.582 47.062 13.815l288.026-81.824c25.695-7.291 50.061-20.219 71.536-38.959 77.746-67.844 85.766-185.762 17.921-263.507-67.844-77.746-185.834-85.702-263.507-17.922a187.185 187.185 0 00-48.286 65.603L115.493 182.69c-6.956 15.687-4.691 34.741 7.315 48.499z"
            />
          </svg> */}
        </Box>
        <Box className={classes.bgGradient}></Box>
      </Box>
      <Box className={clsx(scroller && classes.scroller)}>{children}</Box>
    </Box>
  );
};

export default BadBackground;