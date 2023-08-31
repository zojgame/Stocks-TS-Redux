import { store } from "./store"

type StockType = {
    avgTotalVolume:	number,
    change: number,
    changePercent: number,
    companyName: string,
    currency: string,
    latestPrice:number,
    latestTime: string,
    marketCap:number,
    previousClose: number,
    previousVolume: number,
    symbol:string
}

type StoreType = {
    stockCards: StockType[]
}

type State = ReturnType<typeof store.getState>

type ApiDispatch = typeof store.dispatch

export type { StockType, StoreType, State, ApiDispatch }