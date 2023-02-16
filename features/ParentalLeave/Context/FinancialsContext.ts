

export interface IFinancialInformation {
  initialCapital: number;
  startOfSavingsPeriod: Date;
  endOfSavingsPeriod: Date;
  totalIncome: number;
  totalExpense: number;
  totalResult: number;
}


export const defaultFinancialValues: IFinancialInformation = {
  initialCapital: 0,
  startOfSavingsPeriod: new Date(),
  endOfSavingsPeriod: new Date(),
  totalIncome: 0,
  totalExpense: 0,
  totalResult: 0,
}
