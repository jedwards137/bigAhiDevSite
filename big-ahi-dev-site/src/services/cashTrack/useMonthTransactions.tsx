import { useState, useCallback } from "react";
import { DateTime } from "luxon";

import { Transaction } from "../../model/Transaction/Transaction.model";
import { TransactionType } from "../../model/Transaction/TransactionType.model";

export const useMonthTransactions = (monthId: number, yearId: number) => {
  const [data, setData] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const makeRequest = useCallback(
    async() => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = monthId === 1 ? [
          new Transaction(DateTime.now(), 'desc1 that is really long to test it out', 'cat1', 'subcat1', 'acc1', 1, TransactionType.withdrawal),
          new Transaction(DateTime.now(), 'desc2 for january', 'cat1', 'subcat2', 'acc2', 2, TransactionType.withdrawal),
          new Transaction(DateTime.now(), 'desc3 jan', 'cat3', 'subcat3', 'acc3', 3, TransactionType.withdrawal),
        ]
        : [
          new Transaction(DateTime.now(), 'desc1 that is really long to test it out', 'cat1', 'subcat1', 'acc1', 1, TransactionType.withdrawal),
          new Transaction(DateTime.now(), 'desc2 for feb', 'cat1', 'subcat2', 'acc2', 2, TransactionType.withdrawal),
          new Transaction(DateTime.now(), 'desc3 feb', 'cat3', 'subcat3', 'acc3', 3, TransactionType.withdrawal),
        ];
        // add selected month logic to url
        // const result = await fetchData<any>(`${window['env'].APIM_SERVICE_URL}${ApiRoutes.TRANSACTIONS_URL}`);
        if (result) {
          setData(result);
        }
        setIsLoading(false);
        return result;
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        setData([]);
      }
    },
    []
  );

  return { makeRequest, data, isLoading, isError };
};