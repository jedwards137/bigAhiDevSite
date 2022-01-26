import React, { createContext, useState, ReactNode } from 'react';
import { DateTimeFormatter } from '../utils/DateTimeFormatter';

export const LocalizationContext = createContext({
  dateFormatter: new DateTimeFormatter(),
  setDateFormatter: (dateFormatter: DateTimeFormatter): void => {},
});

export const LocalizationContextProvider = (props: {
  dateFormatter?: DateTimeFormatter;
  children?: ReactNode;
}) => {
  const [dateFormatter, setDateFormatter] = useState(props.dateFormatter || new DateTimeFormatter());

  return (
    <LocalizationContext.Provider
      value={{
        dateFormatter,
        setDateFormatter
      }}
    >
      {props.children}
    </LocalizationContext.Provider>
  );
};