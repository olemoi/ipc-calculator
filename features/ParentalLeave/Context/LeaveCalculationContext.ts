import { _businessDaysDuringLeave, _endOfLeave, _leavePayTotal, _startOfLeave } from "../Helpers/absence.helpers";
import { defaultLeaveValues, IParentalLeaveInformation } from "./LeaveContext";

export interface ICalculatedLeaveValues {
  startOfLeave: Date;
  endOfLeave: Date;
  weeksOfSharedLeave: number;
  businessDaysDuringLeave: number;
  leavePay: number;
  desiredMonthlyPay: number;
}



export const defaultCalcValues: ICalculatedLeaveValues = {
  startOfLeave: _startOfLeave(defaultLeaveValues.dueDate, defaultLeaveValues.momOrDadLeave, defaultLeaveValues.weeksOfSharedLeave),
  endOfLeave: _endOfLeave(defaultLeaveValues.dueDate, defaultLeaveValues.momOrDadLeave, defaultLeaveValues.weeksOfSharedLeave),
  weeksOfSharedLeave: defaultLeaveValues.weeksOfSharedLeave,
  businessDaysDuringLeave: _businessDaysDuringLeave(defaultLeaveValues.momOrDadLeave, defaultLeaveValues.weeksOfSharedLeave),
  leavePay: _leavePayTotal(defaultLeaveValues.momOrDadLeave, defaultLeaveValues.weeksOfSharedLeave),
  desiredMonthlyPay: defaultLeaveValues.desiredYearlySalary / 12,
}



