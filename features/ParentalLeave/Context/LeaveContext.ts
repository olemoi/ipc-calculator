
export interface IParentalLeaveInformation {
  dueDate: Date;
  momOrDadLeave: string;
  isFullTimeLeave: boolean;
  weeksOfSharedLeave: number;
  numberOfChildren: number;
  desiredYearlySalary: number;
  careLeave: boolean;
  hourlyRate: number;
}


export const defaultLeaveValues: IParentalLeaveInformation = {
  dueDate: new Date(),
  momOrDadLeave: 'mom',
  isFullTimeLeave: true,
  weeksOfSharedLeave: 0,
  numberOfChildren: 1,
  desiredYearlySalary: 700_000,
  careLeave: false,
  hourlyRate: 1200,
}
