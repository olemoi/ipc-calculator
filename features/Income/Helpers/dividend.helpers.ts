import { SELSKAPSSKATT } from "@/constants/tax-rates"

export const _dividendAfterTax = (dividend: number): number => {
  return dividend * (1 - SELSKAPSSKATT)
}
