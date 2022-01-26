import React, { useEffect, useState, useContext } from 'react';
import { Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import MaterialTable, { Column } from 'material-table';

import { Transaction } from '../../model/Transaction/Transaction.model';
import { TransactionType } from '../../model/Transaction/TransactionType.model';

import { LocalizationContext } from '../../context/LocalizationContext';

export interface MonthTransactionsTableComponentProps {
  monthId: number;
  transactionList: Transaction[]
}

export const MonthTransactionsTableComponent = (props: MonthTransactionsTableComponentProps) => {
  const { dateFormatter } = useContext(LocalizationContext);

  const [tableColumns, setTableColumns] = useState<Column<Transaction>[]>([]);
  const [tableData, setTableData] = useState<Transaction[]>([]);

  useEffect(() => {
    setTableData(props.transactionList);
  }, [props.transactionList]);

	function getStyles() {
		return makeStyles((theme: Theme) => 
			createStyles({
				amount: {
					color: "#00EE00",
				},
			})
		);
	}
  const classes = getStyles()();
  
  const generateTableColumns = () => {
    return [
      {
        title: 'Date',
        field: 'date',
        sorting: true,
        render: (rowData: Transaction) => {
          return (
            <Typography variant="body1">
              {rowData.date.toLocaleString()}
            </Typography>
          );
        },
      } as any,
      {
        title: 'Description',
        field: 'description',
        sorting: false,
        render: (rowData: Transaction) => {
          return (
            <Typography variant="body1">
              {rowData.description}
            </Typography>
          );
        }
      } as any,
      {
        title: 'Category',
        field: 'category',
        sorting: true,
        render: (rowData: Transaction) => {
          return (
            <Typography variant="body1">
              {rowData.category}
            </Typography>
          )
        }
      } as any,
      {
        title: 'Subcategory',
        field: 'subCategory',
        sorting: true,
        render: (rowData: Transaction) => {
          return (
            <Typography variant="body1">
              {rowData.subCategory}
            </Typography>
          )
        }
      } as any,
      {
        title: 'Account',
        field: 'account',
        sorting: true,
        render: (rowData: Transaction) => {
          return (
            <Typography variant="body1">
              {rowData.account}
            </Typography>
          )
        }
      } as any,
      {
        title: 'Amount',
        field: 'amount',
        sorting: true,
        //align: 'right',
        render: (rowData: Transaction) => {
          return (
            <Typography variant="body1" className={classes.amount}>
              {rowData.type === TransactionType.deposit ? '+' : '-'}${rowData.amount}
            </Typography>
          )
        }
      } as any,
    ]
  }
  
  useEffect(() => {
    setTableColumns(generateTableColumns());
  }, [tableData]);

	return (
		<MaterialTable
      columns={tableColumns}
      data={tableData}
      title={dateFormatter.getMonthName(props.monthId) + ' Transactions'}
      options={{
        paging:true,
        pageSize:10,
        emptyRowsWhenPaging: false,
        pageSizeOptions:[10],
        tableLayout: "fixed",
      }}
    />
	);
};