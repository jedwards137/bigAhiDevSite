import { Transaction } from "../../model/cashTrack/transaction/Transaction.model";

export const sortByDate = (items: Transaction[]): Transaction[] => {
  items = items.sort((a, b) => {
    var dateA: any = new Date(a.date.toISO());
    var dateB: any = new Date(b.date.toISO());
    return dateB - dateA;
  });
  return items;
}

export const getTransactionPropertyByKey = (key: string, transaction: Transaction) => {
  let tmpTransaction: any = transaction;
  let property = tmpTransaction[`${key}`];
  return property;
}

export const applyTransactionChangesForSave = (transaction: Transaction): Transaction => {
  let tmpTransaction: any = transaction;
  const { _changesTracker } = tmpTransaction;

  Object.keys(_changesTracker).forEach((property) => {
    tmpTransaction[`${property}`] = _changesTracker[`${property}`];
  })
  tmpTransaction.date = tmpTransaction.date.toISO({ includeOffset: false });
  
  let updatedTransaction: Transaction = tmpTransaction;
  return updatedTransaction;
}

export const createTransactionsListFromApiResponse = (response: any[]): Transaction[] => {
  let typedTransactions: Transaction[] = [];
  response.forEach((item: any) => {
    let newTransaction = Transaction.fromValues(item);
    typedTransactions.push(newTransaction);
  });
  return typedTransactions;
}

export const rowHasValidChanges = (rowData: Transaction): boolean => {
  let rowChanges = rowData._changesTracker;
  if (rowChanges['transactionId'] === '') return false;
  if (rowChanges['description'] === '') return false;
  if (rowChanges['category'] === '') return false;
  if (rowChanges['subCategory'] === '') return false;
  if (rowChanges['account'] === '') return false;
  if (rowChanges['amount'] === 0) return false;
  return true;
}

export const rowHasChanges = (rowData: Transaction): boolean => {
  let length = Object.keys(rowData._changesTracker).length !== 0;
  return length;
}