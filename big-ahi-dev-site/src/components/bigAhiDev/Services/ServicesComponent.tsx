import React, { useEffect, useState, useContext } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Box, Card, CardContent, CardMedia, Divider } from '@material-ui/core';
import { ServiceItemComponent } from './ServiceItemComponent';

export const ServicesComponent = () => {
  const TITLE_VARIANT = "h3";
  const DESCRIPTION_VARIANT = "body1";

	function getStyles() {
		return makeStyles((theme: Theme) => 
			createStyles({
				container: {
          textAlign: 'center',
        },
        title: {
          paddingBottom: theme.spacing(6), 
          // need to bold this 
        },
        descriptionBox: {
          paddingBottom: theme.spacing(6),
          paddingLeft: theme.spacing(26),
          paddingRight: theme.spacing(26),
        }
			})
		);
	}
  const classes = getStyles()();

	return (
    <Box className={classes.container}>
      <Typography variant="h2" component="div" className={classes.title}> 
        Here is what you can expect
      </Typography>
      <Box className={classes.descriptionBox}>
        <Typography variant="body1" component="div">
          Big Ahi Dev is led by full stack developer Jake Edwards.  He has many years of full-time experience creating everything from websites and mobile applications to
           microservices and api's.  Jake is more than capable to assist with any of your software needs and always evaluates your wants for potential roadblocks and isn't 
           afraid to admit if a project is out of scope.
        </Typography>
      </Box>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <ServiceItemComponent 
            titleText="UI/UX DESIGN"
            titleVariant={TITLE_VARIANT}
            descriptionText="We create seemless and intuitive web designs that enhance the user experience and leave a lasting impression encouraging their return to your site."
            descriptionVariant={DESCRIPTION_VARIANT}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <ServiceItemComponent 
            titleText="FULL STACK INTEGRATION"
            titleVariant={TITLE_VARIANT}
            descriptionText="Our experience with full stack development enables us to create an all in one system that cohesively displays and stores your business data."
            descriptionVariant={DESCRIPTION_VARIANT}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <ServiceItemComponent 
            titleText="MICROSERVICE DEVELOPMENT"
            titleVariant={TITLE_VARIANT}
            descriptionText="Api's and other microservices are also in the realm of possibility and offer flexible new ways to send/receive as well as process your business data."
            descriptionVariant={DESCRIPTION_VARIANT}
          />
        </Grid>
      </Grid>
    </Box>
	);
};