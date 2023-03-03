

export default interface ICompanyFinance {
  companyTurnover: CompanyTurnover;
  companyProfit: CompanyProfit;
  companyResult: CompanyResult;
}

interface CompanyTurnover {
  grossTurnover: number;
  brokerCommission: number;
  netTurnover: number;
}

interface CompanyProfit {
  // netTurnover: number;
  pension: number;
  employerTaxPension: number;
  employerTaxSalary: number;
  salary: number;
  expenses: number;
  profit: number;
}

interface CompanyResult {
  profit: number;
  profitTax: number;
  profitAfterTax: number;
  profitAfterDividend: number;
  dividend: number;
}




export const profitValues: CompanyProfit = {
  // netTurnover: 0,
  pension: 0,
  employerTaxSalary: 0,
  employerTaxPension: 0,
  expenses: 0,
  profit: 0,
  salary: 0,
}

export const turnOverValues: CompanyTurnover = {
  grossTurnover: 0,
  brokerCommission: 0,
  netTurnover: 0,
}

export const resultValues: CompanyResult = {
  profit: 0,
  profitTax: 0,
  profitAfterTax: 0,
  profitAfterDividend: 0,
  dividend: 0,
}



export const defaultCompanyFinanceValues: ICompanyFinance = {
  companyTurnover: turnOverValues,
  companyProfit: profitValues,
  companyResult: resultValues,
}





// {
//   "companyTurnover": {
//     "grossTurnover": 1980000,
//     "brokerCommission": 99000,
//     "netTurnover": 1881000
//   },
//   "companyProfit": {
//     "netTurnover": 1881000,
//     "pension": 70000,
//     "employerTaxPension": 9870,
//     "salary": 1000000,
//     "employerTaxSalary": 153500,
//     "expenses": 50000,
//     "profit": 597630
//   },
//   "companyResult": {
//     "profit": 597630,
//     "profitTax": 131478.6,
//     "profitAfterTax": 466151.4,
//     "profitAfterDividend": -33848.6,
//     "dividend": 500000
//   }
// }

// export default interface ICompanyIncome {
//   grossTurnover: number;
//   netTurnover: number;
//   brokerCommission: number;
//   pension: number;
//   tax: ICompanyTax;
//   profit: number;
//   profitTax: number;
//   result: number;
//   resultAfterDividend: number;
//   yearlyWorkHours: number;
// }


// interface ICompanyTax {
//   salaryEmployerTax: number;
//   pensionEmployerTax: number;
// }

// const defaultCompanyTaxValues: ICompanyTax = {
//   salaryEmployerTax: 0,
//   pensionEmployerTax: 0,
// }

// export const defaultCompanyIncomeValues: ICompanyIncome = {
//   grossTurnover: 0,
//   netTurnover: 0,
//   brokerCommission: 0,
//   pension: 0,
//   tax: defaultCompanyTaxValues,
//   profit: 0,
//   profitTax: 0,
//   result: 0,
//   resultAfterDividend: 0,
//   yearlyWorkHours: 1650,
// }






// {
//   "grossTurnover": 2100000,
//   "netTurnover": 2100000,
//   "brokerCommission": 0,
//   "pension": 70000,
//   "employerTaxSalary": 153500,
//   "employerTaxPension": 9870,
//   "generalExpenses": 0,
//   "profit": 866630,
//   "result": 675971.4,
//   "resultAfterDividend": 675971.4
// }
