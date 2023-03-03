




export default interface IPersonalIncome {
  monthlySalary: number;
  yearlySalary: number;
  personalIncomeTax: IPersonalIncomeTax;
  dividend: number;
  dividendTax: number;
}


export interface IPersonalIncomeTax {
  generalIncomeTax: number;
  socialSecurityTax: number;
  stepTax: number;
  stepTaxVerbose: { [key: string]: number };
  sumTax: number;
  sumMonthlyTax: number;
  taxPercentage: number;
}




export const defaultPersonalIncomeTaxValues: IPersonalIncomeTax = {
  generalIncomeTax: 0,
  socialSecurityTax: 0,
  stepTax: 0,
  stepTaxVerbose: {},
  sumTax: 0,
  sumMonthlyTax: 0,
  taxPercentage: 0,
}

export const defaultPersonalIncomeValues: IPersonalIncome = {
  monthlySalary: 0,
  yearlySalary: 0,
  personalIncomeTax: defaultPersonalIncomeTaxValues,
  dividend: 0,
  dividendTax: 0,
}


// {
//   monthlySalary: 83333.33333333333,
//   yearlySalary: 1000000,
//   tax: {
//     generalIncomeTax: 179509,
//     socialSecurityTax: 79000,
//     stepTax: 66323.35,
//     stepTaxVerbose: {
//       'Trinn 0%': 0,
//       'Trinn 1.7%': 1373.6,
//       'Trinn 4.0%': 14552,
//       'Trinn 13.5%': 38319.75,
//       'Trinn 16.5%': 12078
//     },
//     sumTax: 324832.35,
//     sumMonthlyTax: 27069.3625,
//     taxPercentage: 0.32,
//     timeline: {
//       holidaysAndNames: [Object],
//       numberOfBusinessDays: 213,
//       numberOfVacationDays: 0,
//       numberOfHolidays: 11
//     }
//   },
//   dividend: 0,
//   dividendTax: 0
// }
// {
//   monthlySalary: 83333.33333333333,
//   yearlySalary: 1000000,
//   tax: {
//     generalIncomeTax: 179509,
//     socialSecurityTax: 79000,
//     stepTax: 66323.35,
//     stepTaxVerbose: {
//       'Trinn 0%': 0,
//       'Trinn 1.7%': 1373.6,
//       'Trinn 4.0%': 14552,
//       'Trinn 13.5%': 38319.75,
//       'Trinn 16.5%': 12078
//     },
//     sumTax: 324832.35,
//     sumMonthlyTax: 27069.3625,
//     taxPercentage: 0.32,
//     timeline: {
//       holidaysAndNames: [Object],
//       numberOfBusinessDays: 213,
//       numberOfVacationDays: 0,
//       numberOfHolidays: 11
//     }
//   },
//   dividend: 0,
//   dividendTax: 0
// }
