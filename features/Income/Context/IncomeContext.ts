
export interface IGeneralInformation {
  hourlyRate: number;
  yearlyWorkHours: number;
  generalExpenses: number;
  salary: number;
  salaryTaxRate: number;
  brokerComission: number;
  dividend: number;
  pensionPercentage: number;
}



export const defaultGeneralValues: IGeneralInformation = {
  hourlyRate: 1200,
  yearlyWorkHours: 1650,
  generalExpenses: 0,
  salary: 700_000,
  salaryTaxRate: 35,
  brokerComission: 0,
  dividend: 0,
  pensionPercentage: 0,
};
