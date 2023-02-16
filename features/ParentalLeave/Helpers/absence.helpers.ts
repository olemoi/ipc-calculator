import { ARBEIDSGIVER_AVGIFT, FOEDSELSPERMISJON_MOR, GRUNNBELOP, PAALAGT_PERMISJON_UKER, TOTAL_SHARED_WEEKS, TOTAL_WEEKS_OF_LEAVE } from "@/constants/tax-rates"

export const _totalAbsence = (momOrDadLeave: string, weeksOfSharedLeave: number): number => {

  if (momOrDadLeave === 'mom') {
    return weeksOfSharedLeave + PAALAGT_PERMISJON_UKER + FOEDSELSPERMISJON_MOR
  }
  return weeksOfSharedLeave + PAALAGT_PERMISJON_UKER
}


export const _startOfLeave = (dueDate: Date, momOrDadLeave: string, weeksOfSharedLeave: number): Date => {

  let startOfLeave = new Date(dueDate);
  if (momOrDadLeave === 'mom') {
    startOfLeave.setDate(startOfLeave.getDate() - 21)
    return startOfLeave
  }

  let momLeave = TOTAL_WEEKS_OF_LEAVE - _totalAbsence(momOrDadLeave, weeksOfSharedLeave) - FOEDSELSPERMISJON_MOR
  // Dad's leave starts after mom is done + 1 day
  startOfLeave.setDate(startOfLeave.getDate() + (momLeave * 7) + 1)
  return startOfLeave
}

export const _endOfLeave = (dueDate: Date, momOrDadLeave: string, weeksOfSharedLeave: number) => {

  let startOfLeave = _startOfLeave(dueDate, momOrDadLeave, weeksOfSharedLeave)
  let endOfLeave: Date = new Date(startOfLeave);

  if (momOrDadLeave === 'mom') {
    endOfLeave.setDate(endOfLeave.getDate() + 21)
  }

  endOfLeave.setDate(endOfLeave.getDate() + (weeksOfSharedLeave * 7) + (PAALAGT_PERMISJON_UKER * 7))
  return endOfLeave;

}

export const _businessDaysDuringLeave = (momOrDadLeave: string, weeksOfSharedLeave: number) => {
  return _totalAbsence(momOrDadLeave, weeksOfSharedLeave) * 5
}

export const _leavePayTotal = (momOrDadLeave: string, weeksOfSharedLeave: number) => {
  // TODO: Make this dependant on salary: if salary is less than 6G
  let leavePayYearly = GRUNNBELOP * 6;
  // 1950 hours per year. 7.5 hours per day
  let leavePayDaily = leavePayYearly / 1950 * 7.5

  return leavePayDaily * _businessDaysDuringLeave(momOrDadLeave, weeksOfSharedLeave)
}

export const _leavePayMonthly = () => {
  return (GRUNNBELOP * 6) / 12
}


export const _leavePaySalaryDifference = (desiredYearlySalary: number) => {
  return (desiredYearlySalary / 12) - _leavePayMonthly();
}

export const _totalCoveredByCompany = (desiredYearlySalary: number, momOrDadLeave: string, weeksOfSharedLeave: number, careLeave: boolean) => {
  let differenceDaily = _leavePaySalaryDifference(desiredYearlySalary) * 12 / 230

  let careLeaveExpense = careLeave === true && momOrDadLeave === 'dad' ? desiredYearlySalary / 230 * 10 : 0
  return differenceDaily * _totalAbsence(momOrDadLeave, weeksOfSharedLeave) * 5 + careLeaveExpense;
}

export const _totalCoveredByCompanyWithTax = (desiredYearlySalary: number, momOrDadLeave: string, weeksOfSharedLeave: number, careLeave: boolean) => {
  return _totalCoveredByCompany(desiredYearlySalary, momOrDadLeave, weeksOfSharedLeave, careLeave) * (1 + ARBEIDSGIVER_AVGIFT)
}


