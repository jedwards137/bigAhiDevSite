import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { Transaction } from '../../../../model/cashTrack/transaction/Transaction.model';
import { getTransactionPropertyByKey } from '../../../../utils/cashTrack/CashTrackHelper';

export default function GenericInputComponent({
  rowData, 
  field,
  validateRowChangesFunction,
} : {
  rowData: Transaction;
  field: string;
  validateRowChangesFunction: Function;
}) {
  const [isError, setIsError] = useState<boolean>();
  const [fieldValue, setFieldValue] = useState<string>('');

  useEffect(() => {
    let initialValue = getTransactionPropertyByKey(field, rowData);
    setFieldValue(initialValue);
  }, []);

  useEffect(() => {
    fieldValue.length === 0 ? setIsError(true) : setIsError(false);
  }, [fieldValue]);

  const onChange = (value: any) => {
    setFieldValue(value);
  }

  const onBlur = (value: any) => {
    setFieldValue(value);
    const changesTracker = rowData._changesTracker;
    changesTracker[`${field}`] = value;
    rowData['_changesTracker'] = changesTracker;
    validateRowChangesFunction();
  }

  return (
    <TextField 
      value={fieldValue}
      error={isError}
      onChange={(event) => onChange(event.target.value)}
      onBlur={(event) => onBlur(event.target.value)}
    />
  );
}