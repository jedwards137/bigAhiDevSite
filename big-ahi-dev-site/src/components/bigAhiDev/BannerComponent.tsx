import React, { useEffect, useState, useContext } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Box, Button } from '@material-ui/core';
import bannerImage from '../../media/bannerImage.png';

export const BannerComponent = () => {
	function getStyles() {
		return makeStyles((theme: Theme) => 
			createStyles({
        container: {
          height: '100vh',
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        },
        pulse1: {
          backgroundColor: 'rgba(255, 255, 255, 0.04)', //'rgba(255,255,255,.04)',
          borderRadius: '100%',
          backgroundBlendMode: 'color-dodge',
          zIndex: 3,
          position: 'absolute',
          //display: "flex",
          //top: '50%',
          //left: '50%',
          alignSelf: 'center',
          //position: 'absolute',
          //margin: '10px',
          height: '28rem',
          width: '28rem',
          transform: 'scale(0.95)',
          //width: '20vw',
          //height: '20vw',
          //boxShadow: '0 0 0 0 rgba(255,255,255,.04)',
          // transform: 'scale(1)',
          // animation: 'pulse 2s infinite',
        },
        pulse2: {
          backgroundColor: 'rgba(255, 255, 255, 0.04)', //'rgba(255,255,255,.04)',
          borderRadius: '100%',
          backgroundBlendMode: 'color-dodge',
          zIndex: 2,
          position: 'absolute',
          //display: "flex",
          //top: '50%',
          //left: '50%',
          alignSelf: 'center',
          //position: 'absolute',
          //margin: '10px',
          height: '28rem',
          width: '28rem',
          transform: 'scale(1.45)',
          //width: '20vw',
          //height: '20vw',
          //boxShadow: '0 0 0 0 rgba(255,255,255,.04)',
          // transform: 'scale(1)',
          // animation: 'pulse 2s infinite',
        },
        pulse3: {
          backgroundColor: 'rgba(255, 255, 255, 0.07)', //'rgba(255,255,255,.04)',
          borderRadius: '100%',
          backgroundBlendMode: 'color-dodge',
          zIndex: 1,
          position: 'absolute',
          //display: "flex",
          //top: '50%',
          //left: '50%',
          alignSelf: 'center',
          //position: 'absolute',
          //margin: '10px',
          height: '28rem',
          width: '28rem',
          transform: 'scale(1.95)',
          //width: '20vw',
          //height: '20vw',
          //boxShadow: '0 0 0 0 rgba(255,255,255,.04)',
          // transform: 'scale(1)',
          // animation: 'pulse 2s infinite',
        },
        topTitle: {
          zIndex: 8,
          textAlign: 'center',
          paddingBottom: theme.spacing(6),
          color: '#fff',
        },
        buttonGrid: {
          zIndex: 8,
          paddingBottom: theme.spacing(8),
        },
        button: {
          zIndex: 8,
          display: 'flex',
          width: theme.spacing(18),
          height: theme.spacing(7),
          fontSize: theme.spacing(2),
          borderRadius: '45px',
          backgroundColor: '#fff',
          color: '#5f51fd',
          "&:hover": {
            backgroundColor: '#fff',
            color: '#5f51fd',
          },
        },
        bannerImage: {
          zIndex: 8,
          alignSelf: 'center',
          width: '55%',
        },
			})
		);
	}
  const classes = getStyles()();

	return (
    <Box className={classes.container}>
      <Box className={classes.pulse1} />
      <Box className={classes.pulse2} />
      <Box className={classes.pulse3} />
      <Typography variant="h1" component="div" className={classes.topTitle}>
        Welcome to BIG AHI DEV!
      </Typography>
      <Grid container spacing={4} className={classes.buttonGrid}>
        <Grid container item xs={6} justifyContent="flex-end">
          <Button className={classes.button} variant="contained">
            Inquire
          </Button>
        </Grid>
        <Grid container item xs={6} justifyContent="flex-start">
          <Button className={classes.button} variant="contained">
                  Inquire
          </Button>
        </Grid>
      </Grid>
      <img src={bannerImage} className={classes.bannerImage} alt="banner image" />
    </Box>
	);
};