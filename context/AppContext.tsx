import { defaultCommonValues, ICommonInformation } from "@/features/Common/Context/CommonContext";
import { defaultGeneralValues, IGeneralInformation } from "@/features/Income/Context/IncomeContext";
import ICompanyFinance, { defaultCompanyFinanceValues } from "@/features/Income/Models/Api/CompanyFinance";
import IPersonalIncome, { defaultPersonalIncomeValues } from "@/features/Income/Models/Api/PersonalIncome";
import { defaultFinancialValues, IFinancialInformation } from "@/features/ParentalLeave/Context/FinancialsContext";
import { defaultCalcValues, ICalculatedLeaveValues } from "@/features/ParentalLeave/Context/LeaveCalculationContext";
import { defaultLeaveValues, IParentalLeaveInformation } from "@/features/ParentalLeave/Context/LeaveContext";
import { _businessDaysDuringLeave, _endOfLeave, _leavePayTotal, _startOfLeave } from "@/features/ParentalLeave/Helpers/absence.helpers";
import { createContext, ReactNode, useContext, useState } from "react";


interface IAppProps {
  general: IGeneralInformation;
  leave: IParentalLeaveInformation;
  leaveCalculations: ICalculatedLeaveValues,
  financials: IFinancialInformation,
  common: ICommonInformation,
  personalIncome: IPersonalIncome,
  companyFinance: ICompanyFinance,

  updateCompanyFinance: (values: ICompanyFinance) => void,
  updatePersonalIncome: (values: IPersonalIncome) => void,
  updateGeneral: (values: IGeneralInformation) => void,
  updateLeave: (values: IParentalLeaveInformation) => void,
  updateFinancials: (values: IFinancialInformation) => void,
  updateCommon: (values: ICommonInformation) => void,
}


const defaultAppProps: IAppProps = {
  general: defaultGeneralValues,
  leave: defaultLeaveValues,
  leaveCalculations: defaultCalcValues,
  financials: defaultFinancialValues,
  common: defaultCommonValues,
  personalIncome: defaultPersonalIncomeValues,
  companyFinance: defaultCompanyFinanceValues,

  updateCompanyFinance: () => { },
  updatePersonalIncome: () => { },
  updateGeneral: () => { },
  updateLeave: () => { },
  updateFinancials: () => { },
  updateCommon: () => { },
}



export const AppContext = createContext<IAppProps>(defaultAppProps);


export function useAppContext() {
  return useContext(AppContext);
}


type Props = {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: Props) => {

  const [general, setGeneral] = useState<IGeneralInformation>(defaultGeneralValues);
  const [leave, setLeave] = useState<IParentalLeaveInformation>(defaultLeaveValues);
  const [leaveCalc, setLeaveCalc] = useState<ICalculatedLeaveValues>(defaultCalcValues);
  const [financials, setFinancials] = useState<IFinancialInformation>(defaultFinancialValues);
  const [common, setCommon] = useState<ICommonInformation>(defaultCommonValues);
  const [personalIncome, setPersonalIncome] = useState<IPersonalIncome>(defaultPersonalIncomeValues);
  const [companyFinance, setCompanyFinance] = useState<ICompanyFinance>(defaultCompanyFinanceValues);


  const updateFinancials = (values: IFinancialInformation) => {
    setFinancials(values);
  }

  const updateGeneral = (values: IGeneralInformation) => {
    setGeneral(values)
  }

  const updateCommon = (values: ICommonInformation) => {
    setCommon(values)
  }

  const updatePersonalIncome = (values: IPersonalIncome) => {
    setPersonalIncome(values)
  }


  const updateCompanyFinance = (values: ICompanyFinance) => {
    setCompanyFinance(values)
  }

  const updateLeave = (values: IParentalLeaveInformation) => {
    setLeaveCalc({
      startOfLeave: _startOfLeave(values.dueDate, values.momOrDadLeave, values.weeksOfSharedLeave),
      endOfLeave: _endOfLeave(values.dueDate, values.momOrDadLeave, values.weeksOfSharedLeave),
      weeksOfSharedLeave: values.weeksOfSharedLeave,
      businessDaysDuringLeave: _businessDaysDuringLeave(values.momOrDadLeave, values.weeksOfSharedLeave),
      leavePay: _leavePayTotal(values.momOrDadLeave, values.weeksOfSharedLeave),
      desiredMonthlyPay: values.desiredYearlySalary / 12,
    })

    setLeave(values)
  }

  const value = {
    general: general,
    updateGeneral: updateGeneral,
    leave: leave,
    common: common,
    personalIncome: personalIncome,
    companyFinance: companyFinance,
    updateCompanyFinance: updateCompanyFinance,
    updatePersonalIncome: updatePersonalIncome,
    updateLeave: updateLeave,
    updateFinancials: updateFinancials,
    updateCommon: updateCommon,
    financials: financials,
    leaveCalculations: leaveCalc,
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>)

}
