import { FILTERS, PAYMENT_FREQUENCIES } from "../consts";

export type PayFrequency = typeof PAYMENT_FREQUENCIES;
export type Filters = (typeof FILTERS)[keyof typeof FILTERS];

export type CalculateFuncParams<T extends keyof PayFrequency> = {
  amount: number;
  frequencyPayment: Exclude<keyof PayFrequency, T>;
  filter?: Filters;
};

export type DailyParams = CalculateFuncParams<"daily">;
export type CalculatePaymentDaily = (params: DailyParams) => number;

export type WeeklyParams = CalculateFuncParams<"weekly" | "daily">;
export type CalculatePaymentWeekly = (params: WeeklyParams) => number;

export type BiweeklyParams = CalculateFuncParams<
  "biweekly" | "weekly" | "daily"
>;
export type CalculatePaymentBiweekly = (params: BiweeklyParams) => number;

export type MonthlyParams = CalculateFuncParams<
  "monthly" | "biweekly" | "weekly" | "daily"
>;
export type CalculatePaymentMonthly = (params: MonthlyParams) => number;

export type CalculatePaymentAnnually = (params: { amount: number }) => number;

export interface CalculatePayment {
  daily: CalculatePaymentDaily;
  weekly: CalculatePaymentWeekly;
  biweekly: CalculatePaymentBiweekly;
  monthly: CalculatePaymentMonthly;
}
