import { MonthSnapshotCategory } from "./MonthSnapshotCategory.model";

export class MonthSnapshot {
  month: number;
  year: number;
  totalSpend: number;
  categoryBreakdown: MonthSnapshotCategory[];

	constructor(
    month: number,
    year: number,
    totalSpend: number,
    categoryBreakdown: MonthSnapshotCategory[]
  ) {
    this.month = month;
    this.year = year;
    this.totalSpend = totalSpend;
    this.categoryBreakdown = categoryBreakdown;
  }
}