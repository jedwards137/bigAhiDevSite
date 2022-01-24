import { Box } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import BadHeaderBlock from '../../BadCCL/BadHeaderBlock';

export interface PageContainerProps {
	title: string;
	children: any;
}

export const PageContainer = (props: PageContainerProps) => {
	function getStyles() {
		return makeStyles((theme: Theme) => 
			createStyles({
				pageContainer: {
					position: 'absolute',
					left: theme.spacing(10),
					right: theme.spacing(2),
					bottom: theme.spacing(0),
					top: theme.spacing(0),
				},
				pageContent: {
					position: 'absolute',
					left: theme.spacing(0),
					right: theme.spacing(0),
					top: theme.spacing(10),
					bottom: theme.spacing(0),
				},
			})
		);
	}
	const classes = getStyles()();

	return (
		<Box className={classes.pageContainer}>
			<BadHeaderBlock title={props.title}></BadHeaderBlock>
			<Box className={classes.pageContent}>{props.children}</Box>
		</Box>
	);
};