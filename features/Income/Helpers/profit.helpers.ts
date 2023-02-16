import { SELSKAPSSKATT } from "@/constants/tax-rates";
import { _employerTax, _pension, _turnover } from "./income.helpers"


export const _profit = (turnover: number, salary: number, pension: number, expenses: number): number => {
  return turnover - _employerTax(salary) - salary - pension - expenses;
}

export const _profitAfterTax = (profit: number): number => {
  return profit * (1 - SELSKAPSSKATT)
}

export const _taxOnProfit = (profit: number): number => {
  return profit * SELSKAPSSKATT
}
