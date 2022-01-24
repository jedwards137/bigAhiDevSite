import { Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { PageContainer } from '../Common/PageContainer';
import { Tokens } from '../../BadCCL';

export const PublicLandingPage = () => {
	
	function getStyles() {
		return makeStyles((theme: Theme) => 
			createStyles({
				fullHeight: {
					height: '100%',
				},
				first: {
					backgroundColor: Tokens.colors.lightTheme.black,
				},
				second: {
					backgroundColor: Tokens.colors.lightTheme.red,
				},
			})
		);
	}
	const classes = getStyles()();

	return (
		<React.Fragment>
			<PageContainer title='Welcome to Big Ahi Dev'>
				<Grid className={classes.fullHeight} container spacing={2}>
					<Grid item sm={7}>
						<Typography className={classes.first}>hi</Typography>	
					</Grid>
					<Grid item sm={5}>
					<Typography className={classes.second}>hi</Typography>
					</Grid>
				</Grid>
			</PageContainer>
		</React.Fragment>
	);
}