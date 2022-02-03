import { DateTime } from "luxon";
import { TransactionType } from "./TransactionType.model";

export class Transaction {
  id?: string = '';
  userId: string = '';
  date: DateTime = DateTime.now();
  description: string = '';
  category: string = '';
  subCategory: string = '';
  account: string = '';
  amount: number = 0;
  isOnEditMode: boolean = false;
  type: TransactionType = TransactionType.withdrawal;
  _changesTracker: { [key: string]: any } = {};

  static fromDefault(userId: string) {
    let transaction = new Transaction();
    transaction.userId = userId;
    transaction.isOnEditMode = true;
    transaction._changesTracker = {
      description: '',
      category: '',
      subCategory: '',
      account: '',
      amound: 0
    }
    return transaction;
  }

  static fromValues(item: any) {
    let transaction = new Transaction();
    transaction.id = item['id'];
    transaction.userId = item['userId'];
    transaction.date = DateTime.fromISO(item['date']);
    transaction.description = item['description'];
    transaction.category = item['category'];
    transaction.subCategory = item['subCategory'];
    transaction.account = item['account'];
    transaction.amount = item['amount'];
    transaction.isOnEditMode = false;
    transaction.type = item['type'];
    return transaction;
  }
}