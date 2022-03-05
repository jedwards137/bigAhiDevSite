import React, { useEffect, useState, useContext } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Box, Card, CardContent, CardMedia, Divider } from '@material-ui/core';
import { ServiceItemComponent } from './Services/ServiceItemComponent';
import { CloudUpload } from '@material-ui/icons';

export const ValuesComponent = () => {
  const TITLE_VARIANT = "h3";
  const DESCRIPTION_VARIANT = "body1";

	function getStyles() {
		return makeStyles((theme: Theme) => 
			createStyles({
				container: {
          //textAlign: 'center',
        },
        title: {
          paddingBottom: theme.spacing(4),
        },
        titleDescription: {
          paddingBottom: theme.spacing(8),
        },
        icon : {
          paddingBottom: theme.spacing(4),
          color: '#5f51fb',
          fontSize: theme.spacing(8),
        },
			})
		);
	}
  const classes = getStyles()();

	return (
    <Box className={classes.container}>      
      <Grid container spacing={10}>
        <Grid item xs={7}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h1" component="div" className={classes.title}>
                How we bring value to you
              </Typography>
              <Typography variant="body1" component="div" className={classes.titleDescription}>
                Here at Big Ahi Dev we make sure upfront that both of our expectations are aligned regarding the feasibility of features and the timeline of completion.  
                We also prioritize the preservation of your vision during the entire development life cycle of your project through multiple progress updates.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <CloudUpload className={classes.icon} />
              <Typography variant="h6" component="div" className={classes.title}>
                Synchronized Vision
              </Typography>
              <Typography variant="body1" component="div">
                Upon your inquiry, we work closely with you to align your goals with a personalized roadmap for the development of your project.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <CloudUpload className={classes.icon} />
              <Typography variant="h6" component="div" className={classes.title}>
                Continuous Communication
              </Typography>
              <Typography variant="body1" component="div">
                Once your project is underway, we continuously provide updates to ensure your vision is maintained throughout the duration of your project.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <ServiceItemComponent 
            titleText="insert image here"
            titleVariant={TITLE_VARIANT}
            descriptionText="insert pic here"
            descriptionVariant={DESCRIPTION_VARIANT}
          />
        </Grid>
      </Grid>
    </Box>
	);
};