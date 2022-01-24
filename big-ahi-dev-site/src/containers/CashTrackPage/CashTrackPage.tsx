import { Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { PageContainer } from '../Common/PageContainer';

export const CashTrackPage = () => {
	
	function getStyles() {
		return makeStyles((theme: Theme) => 
			createStyles({
				fullHeight: {
					height: '100%',
				},
			})
		);
	}
	const classes = getStyles()();

	return (
		<React.Fragment>
			<PageContainer title='Welcome to cash'>
        <Grid className={classes.fullHeight} container spacing={2}>
          <Grid item sm={7}>
            <Typography>cash</Typography>	
          </Grid>
          <Grid item sm={5}>
          <Typography>t</Typography>
          </Grid>
        </Grid>
			</PageContainer>
		</React.Fragment>
	);
}