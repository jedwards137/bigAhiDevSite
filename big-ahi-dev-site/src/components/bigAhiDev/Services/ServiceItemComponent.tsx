import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Card, CardContent } from '@material-ui/core';
import { CloudUpload } from '@material-ui/icons';

export interface ServiceItemProps {
  titleText: String;
  titleVariant: "inherit" | "button" | "overline" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "srOnly" | undefined;
  descriptionText: String;
  descriptionVariant: "inherit" | "button" | "overline" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "srOnly" | undefined;
}

export const ServiceItemComponent = (props: ServiceItemProps) => {

	function getStyles() {
		return makeStyles((theme: Theme) => 
			createStyles({
        card: {
          paddingTop: theme.spacing(6),
          paddingBottom: theme.spacing(6),
          paddingLeft: theme.spacing(4),
          paddingRight: theme.spacing(4),
          borderRadius: '0px',
          boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
          "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
          },
        },
        icon : {
          paddingBottom: theme.spacing(6),
          fontSize: theme.spacing(8),
          color: '#5f51fb',
        },
        title: {
          paddingBottom: theme.spacing(6),
          //fontWeight: 700,
        },
        textColor: {
          color: theme.palette.text.secondary,
        },
			})
		);
	}
  const classes = getStyles()();

	return (
    <Card className={classes.card}>
      <CardContent>
        <CloudUpload className={classes.icon}/>
        <Typography variant={props.titleVariant} component="div" className={classes.title}>
          {props.titleText}
        </Typography>
        <Typography variant={props.descriptionVariant} component="div" className={classes.textColor}>
          {props.descriptionText}
        </Typography>
      </CardContent>
    </Card>
	);
};