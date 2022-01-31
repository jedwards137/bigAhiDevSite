import React, { useState, useEffect } from 'react';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { DateTime } from 'luxon';
import { Transaction } from '../../../../model/cashTrack/transaction/Transaction.model';
import { getTransactionPropertyByKey } from '../../../../utils/cashTrack/CashTrackHelper';

export default function DateInputComponent({
  rowData, 
  field,
} : {
  rowData: Transaction;
  field: string;
}) {
  const [fieldValue, setFieldValue] = useState<DateTime>();

  useEffect(() => {
    let initialValue = getTransactionPropertyByKey(field, rowData);
    setFieldValue(initialValue);
  }, [])

  const onChange = (value: any) => {
    let typedValue = DateTime.fromJSDate(value);
    setFieldValue(typedValue);
    const changesTracker = rowData._changesTracker;
    changesTracker[`${field}`] = typedValue;
    rowData['_changesTracker'] = changesTracker;
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <DatePicker
      format="MM/dd/yyyy"
      value={fieldValue}
      onChange={onChange}
    />
    </MuiPickersUtilsProvider>
  );
}