import React from 'react';
import { Box } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Tokens } from '../../BadCCL';
//import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
//import Title from './Title';

// Generate Sales Data
function createData(time: string, amount?: number) {
  return { time, amount };
}

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
];

export const YearTransactionsChartComponent = (props: any) => {
	function getStyles() {
		return makeStyles((theme: Theme) => 
			createStyles({
				pageContainer: {
					position: 'absolute',
					left: theme.spacing(0),
					right: theme.spacing(0),
					bottom: theme.spacing(0),
          top: theme.spacing(0),
          backgroundColor: Tokens.colors.lightTheme.bgDefault,
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
		<React.Fragment>
      {/* <Title>Today</Title> */}
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={Tokens.colors.lightTheme.black}
            style={Tokens.colors.lightTheme.black}
          />
          <YAxis
            stroke={Tokens.colors.lightTheme.black}
            style={Tokens.colors.lightTheme.black}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: Tokens.colors.lightTheme.black,
                ...Tokens.colors.lightTheme.black,
              }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={Tokens.colors.lightTheme.black}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
	);
};