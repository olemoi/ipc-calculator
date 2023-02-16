import { ARBEIDSGIVER_AVGIFT, ARBEIDSGIVER_AVGIFT_OVER_750, SELSKAPSSKATT } from "@/constants/tax-rates";
import { _dividendAfterTax } from "./dividend.helpers";


export const _turnover = (yearlyHours: number, hourlyRate: number): number => {
  return yearlyHours * hourlyRate;
}

export const _netTurnover = (yearlyHours: number, hourlyRate: number, brokerComission: number): number => {
  return yearlyHours * hourlyRate * (1 - brokerComission / 100)
}

export const _salaryAfterTax = (salary: number, salaryTaxRate: number): number => {
  return salary * (1 - (salaryTaxRate / 100))
}

export const _salaryTax = (salary: number, salaryTaxRate: number): number => {
  return salary * (salaryTaxRate / 100)
}


export const _employerTax = (salary: number): number => {
  const salaryOver750 = salary - 750_000
  if (salaryOver750 < 0) {
    return salary * ARBEIDSGIVER_AVGIFT
  } else {
    let temp = 750_000 * ARBEIDSGIVER_AVGIFT
    temp += salaryOver750 * ARBEIDSGIVER_AVGIFT_OVER_750
    return temp
  }
}

export const _pension = (salary: number, pensionPercentage: number): number => {
  return salary * (pensionPercentage / 100)
}

export const _pensionEmployerTax = (salary: number, pensionPercentage: number): number => {

  let pension = _pension(salary, pensionPercentage);

  const pensionOver750 = pension - 750_000;
  if (pensionOver750 < 0) {
    return pension * ARBEIDSGIVER_AVGIFT;
  }

  let temp = 750_000 * ARBEIDSGIVER_AVGIFT;
  temp += pensionOver750 * ARBEIDSGIVER_AVGIFT_OVER_750;
  return temp
}


export const _salaryExpenses = (salary: number, pensionPercentage: number): number => {
  return (+salary + _employerTax(salary) + _pension(salary, pensionPercentage));
}

export const _result = (salary: number, yearlyHours: number, hourlyRate: number, pensionPercentage: number, otherExpenses: number) => {
  const pension = _pension(salary, pensionPercentage)
  return _turnover(yearlyHours, hourlyRate)
    - salary - _employerTax(salary)
    - pension
    - _employerTax(pension)
    - otherExpenses;
}


export const _resultAfterTax = (result: number) => {
  return result - (result * SELSKAPSSKATT)
}

export const _capitalAfterDividend = (result: number, dividend: number) => {
  return _resultAfterTax(result) - dividend;
}

export const _maximumDividend = (result: number) => {
  // maks utbytte = omsetning - (lønn + arbeidsgiveravgift) - (pensjon + arbeidsgiveravgift) - selskapsskatt - utgifter
  return _resultAfterTax(result);

}


export const _maximumSalary = (otherExpenses: number, salary: number, pensionPercentage: number, hourlyRate: number, yearlyHours: number) => {
  // maks lønn = omsetning - utgifter - (pensjon + arbeidsgiveravgift) - arbeidsgiveravgiftlønn 
  //

  let preTaxExpenses = otherExpenses - _pension(salary, pensionPercentage) - _pensionEmployerTax(salary, pensionPercentage);
  let sumAvaliableForSalary = _turnover(yearlyHours, hourlyRate) - preTaxExpenses;

  if (sumAvaliableForSalary > 750_000 * 1.141) {
    return (sumAvaliableForSalary + (750_000 * 0.191) - (750_000 * 0.141)) / 1.191
  }

  return sumAvaliableForSalary / 1.141
}





