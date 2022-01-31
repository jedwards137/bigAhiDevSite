import { useState, useCallback } from "react";
import { DateTime } from "luxon";

import { Transaction } from "../../model/cashTrack/transaction/Transaction.model";
import { TransactionType } from "../../model/cashTrack/transaction/TransactionType.model";

// export async function getData(selectedYearId: number, selectedMonthId: number) {
//   // EXTRACT THIS LATER BUT IS WORKING FOR NOW
//   try {
//     await fetch('http://localhost:7071/api/transactions/year/' + selectedYearId + '/month/' + selectedMonthId)
//     .then((result) => result.json())
//     .then((result) => {
//       console.log(result);
//       return(result);
//     });
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
  // let monthtrxn = await monthTransactionsObject.makeRequest();
  // let d ='f';
  // let promises: Promise<any>[] = [monthTransactionsObject.makeRequest(), monthSnapshotsObject.makeRequest()];
  // Promise.all(promises).then((responses: any) => {
  //   if (responses[0]) {
  //     setSelectedMonthTransactions(responses[0]);
  //   }
  //   if (responses[1]) {
  //     setMonthSnapshots(responses[1]);
  //   }
  // });
//}

// import axios from 'axios';

export const useTransactionsByYearAndMonth = (monthId: number, yearId: number) => {
  const [data, setData] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
    
  // const makeRequest = async () => { //async () => {
  //     try {
  //       await fetch('http://localhost:7071/api/transactions/year/2022/month/1')
  //       .then((result) => result.json())
  //       .then((result) => {
  //         console.log(result);
  //         setData(result);
  //         return result;
  //       });
  //     } catch (error) {
  //       console.log(error);
  //       setData([]);
  //       return [];
  //     }
  // };

//   return { makeRequest, data };
// };

  const makeRequest = useCallback(
    async() => {
      //setIsError(false);
      //setIsLoading(true);

      try {
        await fetch('http://localhost:7071/api/transactions/year/2022/month/1')
        .then((result) => result.json())
        .then((result) => {
          console.log(result);
          setData(result);
          return result;
        });
      } catch (error) {
        console.log(error);
      }
    },
    []
  );
  return { makeRequest, data };
};

      // fetch("https://localhost:7071/api/transactions/year/2022/month/1", {
      //   "method": "GET",
      // })
      // .then(response => response.json())
      // .then(response => {
      //   setData(response);
      //   setIsLoading(false);
      //   return response;
      // })
      // .catch(err => { 
      //   console.log(err); 
      // });

      //try {
        // const result = monthId === 1 ? [
        //   new Transaction(DateTime.now(), 'desc1 that is really long to test it out', 'cat1', 'subcat1', 'acc1', 1, TransactionType.withdrawal, false, "1"),
        //   new Transaction(DateTime.now(), 'desc2 for january', 'cat1', 'subcat2', 'acc2', 2, TransactionType.withdrawal, false, "2"),
        //   new Transaction(DateTime.now(), 'desc3 jan', 'cat3', 'subcat3', 'acc3', 3, TransactionType.withdrawal, false, "3"),
        // ]
        // : [
        //   new Transaction(DateTime.now(), 'desc1 that is really long to test it out', 'cat1', 'subcat1', 'acc1', 1, TransactionType.withdrawal, false, "4"),
        //   new Transaction(DateTime.now(), 'desc2 for feb', 'cat1', 'subcat2', 'acc2', 2, TransactionType.withdrawal, false, "5"),
        //   new Transaction(DateTime.now(), 'desc3 feb', 'cat3', 'subcat3', 'acc3', 3, TransactionType.withdrawal, false, "6"),
        // ];
        // add selected month logic to url
        

        //const result = await fetchData<any>(`${window['env'].APIM_SERVICE_URL}${ApiRoutes.TRANSACTIONS_BY_YEAR_AND_MONTH_URL}`);
      //   if (result) {
      //     setData(result);
      //   }
      //   setIsLoading(false);
      //   return result;
      // } catch (error) {
      //   setIsLoading(false);
      //   setIsError(true);
      //   setData([]);
      // }
//     },
//     []
//   );

//   return { makeRequest, data, isLoading, isError };
// };