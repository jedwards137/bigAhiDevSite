import * as React from 'react';
import { Typography, Box } from '@material-ui/core';
import { Theme, makeStyles } from '@material-ui/core/styles';
import Tokens from './themes/Tokens';

export interface BadHeaderBlockProps {
	title?: string;
	titleIcon?: any;
	headerActions?: React.ReactNode;
	dataTestId?: string;
	children?: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
	headerBox: {
		padding: theme.spacing(2.5, 0, 3),
	},
	headerRow: {
		display: 'flex',
		alignItems: 'space-between',
	},
	contentRow: {
		paddingTop: theme.spacing(0),
		'& *, & .MuiButtonGroup=groupedTextHorizontal': {
			color:
				theme.palette.type === 'light'
				? Tokens.colors.lightTheme.badHeaderContrastText
				: Tokens.colors.darkTheme.badHeaderContrastText,
			borderColor:
			theme.palette.type === 'light'
				? Tokens.colors.lightTheme.badHeaderContrastText
				: Tokens.colors.darkTheme.badHeaderContrastText,
		},
		'& .MuiLink-root': {
			'&:hover': {
				color:
					theme.palette.type === 'light'
					? Tokens.colors.lightTheme.badHeaderContrastText
					: Tokens.colors.darkTheme.badHeaderContrastText,
			},
		},
	},
	titleBox: {
		flex: '1 0 auto',
		textAlign: 'left',
	},
	headerActions: {
		flex: '1 0 auto',
		textAlign: 'right',
		marginTop: theme.spacing(0.5),
		'& *': {
			color:
				theme.palette.type === 'light'
				? Tokens.colors.lightTheme.badHeaderContrastText
				: Tokens.colors.darkTheme.badHeaderContrastText,
		},
		'& .MuiButton-root': {
			textAlign: 'center',
			borderColor:
				theme.palette.type === 'light'
				? Tokens.colors.lightTheme.badHeaderContrastText
				: Tokens.colors.darkTheme.badHeaderContrastText,
			backgroundColor: Tokens.opacity.transparentColor,
			marginLeft: theme.spacing(1),
		},
	},
	headerTitle: {
		color:
			theme.palette.type === 'light'
			? Tokens.colors.lightTheme.badHeaderContrastText
			: Tokens.colors.darkTheme.badHeaderContrastText,
		'& [class*=MuiSvgIcon]': {
			marginRight: theme.spacing(2),
			fill:
				theme.palette.type === 'light'
				? Tokens.colors.lightTheme.badHeaderContrastText
				: Tokens.colors.darkTheme.badHeaderContrastText,
			verticalAlign: 'middle',
			marginBottom: theme.spacing(0.5),
		},
	},
}));

export function ConditionalHeaderActions(
	props: BadHeaderBlockProps['headerActions'],
	headerActionsClass: string,
	dataTestId: string,
) {
	if (props) {
		return (
			<Box data-testId={`${dataTestId}-actions`} className={headerActionsClass}>
				{props}
			</Box>
		);
	} else {
		return null;
	}
}

export function ConditionalContent(
	props: BadHeaderBlockProps['children'],
	contentRowClass: string,
	dataTestId: string,
) {
	if (props) {
		return (
			<Box data-test-id={`${dataTestId}-content`} className={contentRowClass}>
				<Box>{props}</Box>
			</Box>
		);
	} else {
		return null;
	}
}

const BadHeaderBlock: React.FC<BadHeaderBlockProps> =({
	titleIcon,
	title,
	headerActions,
	dataTestId = 'bad-ccl-header-block',
	children,
}) => {
	const classes = useStyles();

	return (
		<div data-test-id={dataTestId}>
			<Box className={classes.headerBox}>
				<Box className={classes.headerRow}>
					<Box className={classes.titleBox}>
						{(titleIcon || title) && (
							<Typography className={classes.headerTitle} variant='h1'>
								{titleIcon}
								{title && <span data-test-id={`${dataTestId}-title`}>{title}</span>}
							</Typography>
						)}
					</Box>
					{ConditionalHeaderActions(headerActions, classes.headerActions, dataTestId)}
				</Box>
				{ConditionalContent(children, classes.contentRow, dataTestId)}
			</Box>
		</div>
	);
};

export default BadHeaderBlock;