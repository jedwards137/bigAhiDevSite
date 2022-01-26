import { DateTime } from "luxon";
import { TransactionType } from "./TransactionType.model";

export class Transaction {
  transactionId?: string;
  date: DateTime;
  description: string;
  category: string;
  subCategory: string;
  account: string;
  amount: number;
  type: TransactionType;

	constructor(
    date: DateTime,
    description: string,
    category: string,
    subCategory: string,
    account: string,
    amount: number,
    type: TransactionType,
    transactionId?: string,
	) {
    this.transactionId = transactionId;
    this.date = date;
    this.description = description;
    this.category = category;
    this.subCategory = category;
    this.account = account;
    this.amount = amount;
    this.type = type;
	}
}