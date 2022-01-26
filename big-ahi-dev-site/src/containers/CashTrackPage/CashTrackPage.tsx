import React, { useState, useEffect, useContext } from 'react';import { Container, Box, Grid } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { YearTransactionsChartComponent } from '../../components/cashTrack/YearTransactionsChartComponent';
import { MonthTransactionsTableComponent } from '../../components/cashTrack/MonthTransactionsTableComponent';

import { Transaction } from '../../model/Transaction/Transaction.model';
import { MonthSnapshot } from '../../model/MonthSnapshot/MonthSnapshot.model';

import { LocalizationContext } from '../../context/LocalizationContext';

import { useMonthTransactions } from '../../services/cashTrack/useMonthTransactions';
import { useMonthSnapshots } from '../../services/cashTrack/useMonthSnapshots';

export const CashTrackPage = () => {
  const { dateFormatter } = useContext(LocalizationContext);

  const [selectedMonthId, setSelectedMonthId] = useState<number>(dateFormatter.getCurrentMonthId());
  const [selectedYearId, setSelectedYearId] = useState<number>(dateFormatter.getCurrentYearId());
  const [selectedMonthTransactions, setSelectedMonthTransactions] = useState<Transaction[]>([]);
  const [monthSnapshots, setMonthSnapshots] = useState<MonthSnapshot[]>([]);

  const monthTransactionsObject = useMonthTransactions(selectedMonthId, selectedYearId);
  const monthSnapshotsObject = useMonthSnapshots();

  useEffect(() => {
    let promises: Promise<any>[] = [monthTransactionsObject.makeRequest(), monthSnapshotsObject.makeRequest()];
    Promise.all(promises).then((responses: any) => {
      if (responses[0]) {
        setSelectedMonthTransactions(responses[0]);
      }
      if (responses[1]) {
        setMonthSnapshots(responses[1]);
      }
    });
  }, [selectedMonthId, selectedYearId]);

	// function getStyles() {
	// 	return makeStyles((theme: Theme) => 
	// 		createStyles({
	// 			fullHeight: {
	// 				height: '100%',
	// 			},
	// 		})
	// 	);
	// }
  // const classes = getStyles()();

	return (
		<React.Fragment>
      <Box mt={4} mb={4}>
        <Container maxWidth="lg" >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <YearTransactionsChartComponent />
            </Grid>
            <Grid item xs={12}>
              <MonthTransactionsTableComponent monthId={selectedMonthId} transactionList={selectedMonthTransactions} />
            </Grid>
          </Grid>
        </Container>
      </Box>
		</React.Fragment>
	);
}