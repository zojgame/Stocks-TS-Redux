import jsonp from 'jsonp'
import { MOST_ACTIVE_LIST_URL, RequestCallbackType } from ".";

const getMostActive = async (callback: RequestCallbackType, listLimit: number = 10) => {
    const url = `${MOST_ACTIVE_LIST_URL}&listLimit=${listLimit}`
    const options = undefined;

    await jsonp(url, options, callback)
};

export { getMostActive }