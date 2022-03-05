import React, { useEffect, useState, useContext } from 'react';
import { createStyles, makeStyles, Theme, styled } from '@material-ui/core/styles';
import { Grid, Typography, Box, Card, CardContent, CardMedia, Divider, Button, TextField } from '@material-ui/core';
import { ServiceItemComponent } from './Services/ServiceItemComponent';

export const CopyrightComponent = () => {
	function getStyles() {
		return makeStyles((theme: Theme) => 
			createStyles({
				container: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        },
        description: {
          color: '#fff',
          paddingTop: theme.spacing(0.5),
          paddingBottom: theme.spacing(0.5),
        },
			})
		);
	}
  const classes = getStyles()();

  const CssTextField = styled(TextField) ({
    
  });

	return (
    <Box className={classes.container}>      
      <Typography variant="body2" component="div" className={classes.description}> 
        Copyright ©2021 | Big Ahi Dev All Rights Reserved 
      </Typography>
    </Box>
	);
};