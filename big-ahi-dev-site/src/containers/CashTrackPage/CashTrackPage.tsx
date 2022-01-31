import React, { useState, useEffect, useContext } from 'react';
import { Container, Box, Grid, Paper } from '@material-ui/core';
//import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import axios from 'axios';
import { DateTime } from 'luxon';
import { sortByDate, createTransactionsListFromApiResponse } from '../../utils/cashTrack/CashTrackHelper';
import { YearTransactionsChartComponent } from '../../components/cashTrack/YearTransactionsChartComponent';
import { MonthTransactionsTableComponent } from '../../components/cashTrack/monthTransactionsTable/MonthTransactionsTableComponent';
import { Transaction } from '../../model/cashTrack/transaction/Transaction.model';
import { MonthSnapshot } from '../../model/cashTrack/monthSnapshot/MonthSnapshot.model';
import { MonthTransactionsTableActions } from '../../utils/cashTrack/CashTrackConstants';
import { LocalizationContext } from '../../context/LocalizationContext';
//import { useTransactionsByYearAndMonth } from '../../services/cashTrack/useTransactionsByYearAndMonth';
//import { useMonthSnapshots } from '../../services/cashTrack/useMonthSnapshots';

export const CashTrackPage = () => {
  const { dateFormatter } = useContext(LocalizationContext);

  const [selectedMonthId, setSelectedMonthId] = useState<number>(dateFormatter.getCurrentMonthId());
  const [selectedYearId, setSelectedYearId] = useState<number>(dateFormatter.getCurrentYearId());
  const [selectedMonthTransactions, setSelectedMonthTransactions] = useState<Transaction[]>([]);
  const [monthSnapshots, setMonthSnapshots] = useState<MonthSnapshot[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  //const monthTransactionsObject = useTransactionsByYearAndMonth(selectedMonthId, selectedYearId);
  //const monthSnapshotsObject = useMonthSnapshots();

  useEffect(() => {
    getTransactionsByYearAndMonth();
  }, [selectedMonthId, selectedYearId]);

  function submitTransactionChanges(rowData: Transaction, transactionTableAction: MonthTransactionsTableActions) {
    setIsLoading(true);
    switch(transactionTableAction) {
      case MonthTransactionsTableActions.addRow: {
        addRow(rowData);
        break;
      }
      case MonthTransactionsTableActions.editRow: {
        editRowById(rowData);
        break;
      }
      case MonthTransactionsTableActions.deleteRow: {
        deleteTransactionById(rowData);
        break;
      }
    }
    // move get call to here to call new data once change functions have finished server side.
  }

	// function getStyles() {
	// 	return makeStyles((theme: Theme) => 
	// 		createStyles({
	// 			gridPaper: {
	// 				height: theme.spacing(60),
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
            {/* <Grid item xs={12}>
              <YearTransactionsChartComponent />
            </Grid> */}
            <Grid item xs={12}>
              <MonthTransactionsTableComponent 
                monthId={selectedMonthId} 
                monthTransactions={selectedMonthTransactions}
                isLoading={isLoading}
                submitTransactionChangesFuction={submitTransactionChanges}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
		</React.Fragment>
  );
  
  async function getTransactionsByYearAndMonth() {
    await axios("http://localhost:7071/api/transactions/year/" + selectedYearId + "/month/" + selectedMonthId)
    .then((response) => {
      let transactions = createTransactionsListFromApiResponse(response.data);
      transactions = sortByDate(transactions);
      setSelectedMonthTransactions(transactions);
      setIsLoading(false);
    })
    .catch((error) => {
      console.log('error' + error);
    });
  }

  async function deleteTransactionById(rowData: Transaction) {
    await axios.delete("http://localhost:7071/api/transactions/" + rowData.transactionId + "/azureId/" + rowData.id)
    .then((response) => {
      setIsLoading(false);
    }).catch((error) => {
      console.log('error' + error)
    })
    .finally(() => {
      getTransactionsByYearAndMonth();
    });
  }

  async function addRow(rowData: Transaction) {

  }

  async function editRowById(rowData: Transaction) {
    await axios.put("http://localhost:7071/api/transactions/" + rowData.transactionId + "/azureId/" + rowData.id, rowData)
    .then((response) => {
      setIsLoading(false);
    })
    .catch((error) => {
      console.log('error' + error);
    })
    .finally(() => {
      getTransactionsByYearAndMonth();
    });
  }
}