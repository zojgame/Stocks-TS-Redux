const TOKEN = process.env.REACT_APP_IEX_TOKEN
const BASE_URL = 'cloud.iexapis.com/stable/stock/market/list/mostactive'
const MOST_ACTIVE_LIST_URL = `https://cloud.iexapis.com/stable/stock/market/list/mostactive?token=${TOKEN}`


export {TOKEN, BASE_URL, MOST_ACTIVE_LIST_URL}