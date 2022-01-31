export class MonthSnapshotCategory {
  name: string;
  totalSpend: number;

  constructor(name: string, totalSpend: number) {
    this.name = name;
    this.totalSpend = totalSpend;
  }
}