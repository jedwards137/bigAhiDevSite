import React, { useState, useEffect } from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import { Transaction } from '../../../../model/cashTrack/transaction/Transaction.model';
import { getTransactionPropertyByKey } from '../../../../utils/cashTrack/CashTrackHelper';
import { TransactionType } from '../../../../model/cashTrack/transaction/TransactionType.model';

export default function AmountInputComponent({
  rowData, 
  field,
  validateRowChangesFunction,
} : {
  rowData: Transaction;
  field: string;
  validateRowChangesFunction: Function;
}) {
  const [isError, setIsError] = useState<boolean>(false);
  const [fieldValue, setFieldValue] = useState<number>();

  useEffect(() => {
    let initialValue = getTransactionPropertyByKey(field, rowData);
    setFieldValue(initialValue);
  }, []);

  useEffect(() => {
    fieldValue === 0 ? setIsError(true) : setIsError(false);
  }, [fieldValue]);

  const onChange = (value: any) => {
    setFieldValue(value);
  }
  
  const onBlur = (value: any) => {
    let truncValue: number = Number(Number(value).toFixed(2));
    setFieldValue(truncValue);
    const changesTracker = rowData._changesTracker;
    changesTracker[`${field}`] = truncValue;
    truncValue > 0 ? changesTracker['type'] = TransactionType.deposit : changesTracker['type'] = TransactionType.withdrawal;
    rowData['_changesTracker'] = changesTracker;
    validateRowChangesFunction();
  }

  return (
    <TextField 
      value={fieldValue}
      error={isError}
      type="number"
      onChange={(event) => onChange(event.target.value)}
      onBlur={(event) => onBlur(event.target.value)}
      InputProps={{
        startAdornment: <InputAdornment position="start">$</InputAdornment>,
      }}
    />
  );
}