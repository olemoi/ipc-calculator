

export interface ICommonInformation {
  vacationStart: Date;
  vacationEnd: Date;
  totalBusinessDays: number;
  totalVacationDays: number;
  totalHolidays: number;
}


export const defaultCommonValues: ICommonInformation = {
  vacationStart: new Date(),
  vacationEnd: new Date(),
  totalBusinessDays: 0,
  totalVacationDays: 0,
  totalHolidays: 0,
} 
