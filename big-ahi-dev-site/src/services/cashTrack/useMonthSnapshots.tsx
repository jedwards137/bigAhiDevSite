import { useState, useCallback } from "react";

import { MonthSnapshot } from "../../model/MonthSnapshot/MonthSnapshot.model";
import { MonthSnapshotCategory } from "../../model/MonthSnapshot/MonthSnapshotCategory.model";

export const useMonthSnapshots = () => {
  const [data, setData] = useState<MonthSnapshot[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const makeRequest = useCallback(
    async() => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = [
          new MonthSnapshot(1, 2022, 1234.44, [new MonthSnapshotCategory('utilities', 410), new MonthSnapshotCategory('food', 310)]),
          new MonthSnapshot(2, 2022, 1234.44, [new MonthSnapshotCategory('utilities', 420), new MonthSnapshotCategory('food', 320)]),
          new MonthSnapshot(3, 2022, 1234.44, [new MonthSnapshotCategory('utilities', 430), new MonthSnapshotCategory('food', 330)]),
          new MonthSnapshot(4, 2022, 1234.44, [new MonthSnapshotCategory('utilities', 440), new MonthSnapshotCategory('food', 340)]),
          new MonthSnapshot(5, 2022, 1234.44, [new MonthSnapshotCategory('utilities', 450), new MonthSnapshotCategory('food', 350)]),
          new MonthSnapshot(6, 2022, 1234.44, [new MonthSnapshotCategory('utilities', 460), new MonthSnapshotCategory('food', 360)]),
          new MonthSnapshot(7, 2022, 1234.44, [new MonthSnapshotCategory('utilities', 470), new MonthSnapshotCategory('food', 370)]),
          new MonthSnapshot(8, 2022, 1234.44, [new MonthSnapshotCategory('utilities', 480), new MonthSnapshotCategory('food', 380)]),
          new MonthSnapshot(9, 2022, 1234.44, [new MonthSnapshotCategory('utilities', 490), new MonthSnapshotCategory('food', 393)]),
          new MonthSnapshot(10, 2022, 1234.44, [new MonthSnapshotCategory('utilities', 410), new MonthSnapshotCategory('food', 310)]),
          new MonthSnapshot(11, 2022, 1234.44, [new MonthSnapshotCategory('utilities', 411), new MonthSnapshotCategory('food', 311)]),
          new MonthSnapshot(12, 2022, 1234.44, [new MonthSnapshotCategory('utilities', 412), new MonthSnapshotCategory('food', 312)]),
        ];
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