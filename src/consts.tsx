import { UpOutlined, DownOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";
import { StockType } from "./types";

enum REDUCERS {
    STOCK_REDUCER = 'stocksReducer'
}

const STOCKS_PER_PAGE = 10;

const sortItems: MenuProps['items'] = [
  {
    label: 'Marker Cap to highest',
    key: '1',
    icon: <UpOutlined />
  },
  {
    label: 'Marker Cap to lowest',
    key: '2',
    icon: <DownOutlined />
  },
  {
    label: 'Price to highest',
    key: '3',
    icon: <UpOutlined />
  },    
  {
    label: 'Price to lowest',
    key: '4',
    icon: <DownOutlined />
  }    
];

const priceToLow = (a: StockType, b: StockType) => b.latestPrice - a.latestPrice;
const priceToHigh = (a: StockType, b: StockType) => a.latestPrice - b.latestPrice;
const marketKapToLow = (a: StockType, b: StockType) => b.marketCap - a.marketCap;
const marketKapToHigh = (a: StockType, b: StockType) => a.marketCap - b.marketCap;

export {REDUCERS, STOCKS_PER_PAGE, sortItems, priceToLow, priceToHigh, marketKapToHigh, marketKapToLow}