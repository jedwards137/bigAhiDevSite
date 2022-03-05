import React, { useEffect, useState, useContext } from 'react';
import { createStyles, makeStyles, Theme, styled } from '@material-ui/core/styles';
import { Grid, Typography, Box, Card, CardContent, CardMedia, Divider, Button, TextField } from '@material-ui/core';
import { ServiceItemComponent } from './Services/ServiceItemComponent';

export const ContactComponent = () => {
	function getStyles() {
		return makeStyles((theme: Theme) => 
			createStyles({
				container: {
          borderRadius: '6px',
          paddingLeft: theme.spacing(7),
          paddingRight: theme.spacing(7),
          paddingTop: theme.spacing(8),
          paddingBottom: theme.spacing(8),
          backgroundImage: `linear-gradient(50deg,#5f51fb 0%,#767cfd 64%,#8ca7ff 100%)`,
        },
        title: {
          paddingBottom: theme.spacing(4),
          color: '#fff',
        },
        description: {
          color: '#fff',
        },
        formGrid: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        },
        emailBox: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: theme.spacing(6),
          borderRadius: '45px',
          border: '1px solid rgba(255,255,255,.3)',
          background: 'rgba(247,248,252,.059)',
          color: '#fff',
        },
        textField: {
          marginLeft: theme.spacing(3),
          marginRight: theme.spacing(3),
        },
        textFieldColor: {
          color: '#fff',
        },
        button: {
          width: theme.spacing(16),
          height: theme.spacing(6),
          borderRadius: '45px',
          backgroundColor: '#5f51fd',
          color: '#fff',
          "&:hover": {
            backgroundColor: '#fff',
            color: '#5f51fd',
          },
        }
			})
		);
	}
  const classes = getStyles()();

	return (
    <Box className={classes.container}>      
      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
        <Typography variant="h2" component="div" className={classes.title}> 
          Want to get started?
        </Typography>
        <Typography variant="body1" component="div" className={classes.description}> 
          Inquire today to learn more about our services! We work closely with you to make sure to make sure edxpecteations are aligned and some other jazz.
        </Typography>
        </Grid>
        <Grid item xs className={classes.formGrid}>
          <Box className={classes.emailBox}>
            <TextField
              className={classes.textField}
              InputProps={{
                disableUnderline: true,
                classes: {
                  input: classes.textFieldColor,
                }
              }}
              fullWidth
              placeholder="Type your email..."
            />
          </Box>
        </Grid>
        <Grid item xs="auto"  className={classes.formGrid}>
          <Button className={classes.button} variant="contained">
              Inquire
          </Button>
        </Grid>
      </Grid>
    </Box>
	);
};