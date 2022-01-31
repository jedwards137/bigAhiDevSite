import React, { useEffect, useState, useContext } from 'react';
import { Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MaterialTable, { Column } from 'material-table';
import { CheckBox, Edit, Delete, Cancel, Add, AddBox } from '@material-ui/icons';
import _ from 'lodash';
import { Transaction } from '../../../model/cashTrack/transaction/Transaction.model';
import { TransactionType } from '../../../model/cashTrack/transaction/TransactionType.model';
import { LocalizationContext } from '../../../context/LocalizationContext';
import { MonthTransactionsTableActions } from '../../../utils/cashTrack/CashTrackConstants';
import DateInputComponent from './inputComponents/DateInputComponent';
import GenericInputComponent from './inputComponents/GenericInputComponent';
import AmountInputComponent from './inputComponents/AmountInputComponent';
import { applyTransactionChangesForSave, rowHasValidChanges, rowHasChanges } from '../../../utils/cashTrack/CashTrackHelper';
import { DateTime } from 'luxon';

export interface MonthTransactionsTableComponentProps {
  monthId: number;
  monthTransactions: Transaction[]
  isLoading: boolean;
  submitTransactionChangesFuction: Function;
}

export const MonthTransactionsTableComponent = (props: MonthTransactionsTableComponentProps) => {
  const { dateFormatter } = useContext(LocalizationContext);

  const [tableData, setTableData] = useState<Transaction[]>([]);
  const [originalTableData, setOriginalTableData] = useState<Transaction[]>([]);
  const [tableColumns, setTableColumns] = useState<Column<Transaction>[]>([]);
  const [tableActions, setTableActions] = useState<any[]>([]);
  const [isTableInputError, setIsTableInputError] = useState<boolean>(false);

  useEffect(() => {
    setTableData(props.monthTransactions);
  }, [props.monthTransactions]);

	function getStyles() {
		return makeStyles((theme: Theme) => 
			createStyles({
				amount: {
					color: "#00EE00", // not working
				},
			})
		);
	}
  const classes = getStyles()();

  function validateRowChanges() {
    let rowInQuestion = tableData.find((transaction) => transaction.isOnEditMode);
    if (rowInQuestion) {
      rowHasValidChanges(rowInQuestion) ? setIsTableInputError(false) : setIsTableInputError(true);
    }
  }
  
  const generateTableColumns = () => {
    return [
      {
        title: 'Date',
        field: 'date',
        sorting: true,
        render: (rowData: Transaction) => {
          if (rowData.isOnEditMode) {
            return (
              <DateInputComponent rowData={rowData} field={'date'} />
            );
          } else {
            return (
              <Typography variant="body1">
                {rowData.date.toLocaleString()}
              </Typography>
            );
          }
        },
      } as any,
      {
        title: 'Description',
        field: 'description',
        sorting: false,
        render: (rowData: Transaction) => {
          if (rowData.isOnEditMode) {
            return (
              <GenericInputComponent rowData={rowData} field={'description'} validateRowChangesFunction={validateRowChanges} />
            );
          } else {
            return (
              <Typography variant="body1">
                {rowData.description}
              </Typography>
            );
          }
        }
      } as any,
      {
        title: 'Category',
        field: 'category',
        sorting: true,
        render: (rowData: Transaction) => {
          if (rowData.isOnEditMode) {
            return (
              <GenericInputComponent rowData={rowData} field={'category'} validateRowChangesFunction={validateRowChanges} />
            );
          } else {
            return (
              <Typography variant="body1">
                {rowData.category}
              </Typography>
            );
          }
        }
      } as any,
      {
        title: 'Subcategory',
        field: 'subCategory',
        sorting: true,
        render: (rowData: Transaction) => {
          if (rowData.isOnEditMode) {
            return (
              <GenericInputComponent rowData={rowData} field={'subCategory'} validateRowChangesFunction={validateRowChanges} />
            );
          } else {
            return (
              <Typography variant="body1">
                {rowData.subCategory}
              </Typography>
            );
          }
        }
      } as any,
      {
        title: 'Account',
        field: 'account',
        sorting: true,
        render: (rowData: Transaction) => {
          if (rowData.isOnEditMode) {
            return (
              <GenericInputComponent rowData={rowData} field={'account'} validateRowChangesFunction={validateRowChanges} />
            );
          } else {
            return (
              <Typography variant="body1">
                {rowData.account}
              </Typography>
            );
          }
        }
      } as any,
      {
        title: 'Amount',
        field: 'amount',
        sorting: true,
        //align: 'right',
        render: (rowData: Transaction) => {
          if (rowData.isOnEditMode) {
            return (
              <AmountInputComponent rowData={rowData} field={'amount'} validateRowChangesFunction={validateRowChanges} />
            );
          } else {
            return (
              <Typography variant="body1" className={classes.amount}>
              {rowData.type === TransactionType.deposit ? '+' : '-'}${Math.abs(rowData.amount)}
            </Typography>
            );
          }
        }
      } as any,
    
    ]
  };

  function onAddNewRow() {
    setOriginalTableData(_.cloneDeep(tableData));
    let newTransaction: Transaction = Transaction.fromDefault('1');
    let tmpData = _.cloneDeep(tableData);
    tmpData.unshift(newTransaction);
    setTableData(tmpData);
  }

  function onEditRow(rowData: Transaction) {
    setOriginalTableData(_.cloneDeep(tableData));
    rowData.isOnEditMode = true;
  }

  function onDeleteRow(rowData: Transaction) {
    props.submitTransactionChangesFuction(rowData, MonthTransactionsTableActions.deleteRow);
  }

  function onUpdateRow(rowData: Transaction) {
    setOriginalTableData([]);
    if (!rowHasChanges(rowData)) {
      rowData.isOnEditMode = false;
      return;
    };
    let updatedRow = applyTransactionChangesForSave(rowData);
    props.submitTransactionChangesFuction(updatedRow, MonthTransactionsTableActions.editRow);
  }

  function onCancelEditRow() {
    setTableData(originalTableData);
    setIsTableInputError(false);
    setOriginalTableData([]);
    // FIX CANCEL WHEN EDITING NEW ROW... ERRORS OUT
  }

  function rowIsBeingEdited() {
    return !!tableData.find((row) => row.isOnEditMode);
  }

  const generateTableActions = () => {
    return [
      {
        icon: AddBox,
        tooltip: 'Add Transaction',
        isFreeAction: true,
        disabled: rowIsBeingEdited(),
        onClick: () => {
          onAddNewRow();
        }
      },
      (rowData: Transaction) => {
        if (rowData.isOnEditMode) {
          return {
            icon: CheckBox,
            tooltip: 'Save',
            isFreeAction: false,
            disabled: isTableInputError,
            onClick: () => {
              onUpdateRow(rowData);
            }
          };
        } else {
          return {
            icon: Edit,
            tooltip: 'Edit',
            isFreeAction: false,
            disabled: rowIsBeingEdited(),
            onClick: () => {
              onEditRow(rowData);
            }
          }
        };
      },
      (rowData: Transaction) => {
        if (rowData.isOnEditMode) {
          return {
            icon: Cancel,
            tooltip: 'Cancel',
            isFreeAction: false,
            onClick: () => {
              onCancelEditRow();
            }
          };
        } else {
          return {
            icon: Delete,
            tooltip: 'Delete',
            isFreeAction: false,
            disabled: rowIsBeingEdited(),
            onClick: () => {
              onDeleteRow(rowData);
            }
          };
        }
      }
    ];
  };
  
  useEffect(() => {
    setTableColumns(generateTableColumns());
    setTableActions(generateTableActions());
    validateRowChanges();
    //setOriginalTableData(_.cloneDeep(tableData));
  //}, [tableData, isTableInputError]);
  }, [tableData, originalTableData, isTableInputError]);



	return (
		<MaterialTable
      data={tableData}
      columns={tableColumns}
      actions={tableActions}
      isLoading={props.isLoading}
      title={dateFormatter.getMonthName(props.monthId) + ' Transactions'}
      options={{
        actionsColumnIndex: -1,
        paging:true,
        pageSize:10,
        emptyRowsWhenPaging: false,
        pageSizeOptions:[10],
        //tableLayout: "fixed",
        headerStyle: {
          fontWeight: 'bold',
        }
      }}
      localization={{
        header: {
          actions: '',
        },
      }}
    />
	);
};