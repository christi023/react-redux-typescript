import { ActionType } from '../action-types';
// create a action type for every action we can omit with interfaces
interface DepositAction {
  type: ActionType.DEPOSIT;
  payload: number;
}

interface WithdrawAction {
  type: ActionType.WITHDRAW;
  payload: number;
}

interface BankruptAction {
  type: ActionType.BANKRUPT;
}

// Action can be either or with the reference interface
export type Action = DepositAction | WithdrawAction | BankruptAction;
