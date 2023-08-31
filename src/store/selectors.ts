import { StockType, State } from "../types"
import { REDUCERS } from "../consts"

const getStocks = (state: State) : StockType[] => state[REDUCERS.STOCK_REDUCER].stockCards

export { getStocks }