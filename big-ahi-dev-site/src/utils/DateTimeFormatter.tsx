import { DateTime } from 'luxon';

export class DateTimeFormatter {
  getCurrentMonthId() {
    return this.getCurrent().month;
  }

  getCurrentYearId() {
    return this.getCurrent().year;
  }

  getMonthName(monthId: number) {
    return this.getCurrent().set({ month: monthId }).monthLong;
  }

  getCurrent() {
    return DateTime.now();
  }
}