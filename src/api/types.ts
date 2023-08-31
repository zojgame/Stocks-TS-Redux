import { StockType } from "../types";

type RequestCallbackType = (error: Error | null, data: StockType[]) => void;

export type { RequestCallbackType }
